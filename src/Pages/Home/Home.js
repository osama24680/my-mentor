import { useContext } from "react";
import "./Home.scss";
import { mentorStore } from "../../ContextAPI/Store";
import Navbar from "../../Components/HomeComponents/Navbar/Navbar";
import DiscoverTopMentors from "../../Components/HomeComponents/DiscoverTopMentors/DiscoverTopMentors";
import RecentOppo from "../../Components/HomeComponents/RecentOppo/RecentOppo";
import Invite from "../../Components/HomeComponents/Invite/Invite";
import OpenRequests from "../../Components/HomeComponents/OpenRequests/OpenRequests";
import FAQ from "../../Components/HomeComponents/FAQ/FAQ";
import LocationMentors from "../../Components/HomeComponents/LocationMentors/LocationMentors";
import Footer from "../../Components/HomeComponents/Footer/Footer";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  const ctx = useContext(mentorStore);

  return (
    <div className="home">
      <Navbar />
      {/* ****************************************searchmentors**************************************** */}
      <div className="searchmentors">
        <div className="searchmentors_content">
          <h1>Get connected to the best mentors</h1>
          <p>
            Book and meet over 3,597+ mentors for mentorship in our global
            community
          </p>
          <div className="searchmentors_content_inputs">
            <div className="selectDiv">
              <select className="searchmentors_content_inputs_fields">
                {ctx.fields.map((field, index) => (
                  <option key={index} value={field}>
                    {field}
                  </option>
                ))}
              </select>
              <div className="arrowContainer" >
                <IoIosArrowDown />
              </div>
            </div>

            <div className="searchmentors_content_inputs_searchInput">
              <input onChange={(e)=>ctx.setSearchValue(e.target.value)} type="text" placeholder="Mentor Mentee" value={ctx.searchValue}/>
              <div>
                <AiOutlineSearch  onClick={ctx.searchHome} style={{cursor:"pointer"}}/>
              </div>
            </div>
          </div>
          <p>Learn more about mentor and mentee</p>
        </div>
      </div>
      {/* ****************************************DiscoverMentors**************************************** */}
      <div className="DiscoverMentors">
        <h2>Discover Egypt's top mentors</h2>
        <DiscoverTopMentors />
      </div>
      {/* ****************************************RecentOppo**************************************** */}
      <div className="RecentOppo">
        <h2>Recent Mentoring Opportunities</h2>
        <RecentOppo />
        <div className="more">
          <Link to="/SearchResults/OpportunitySearch">More Opportunities...</Link>
        </div>
      </div>
      {/* ****************************************Invite**************************************** */}
      <Invite />
      {/* ****************************************OpenRequests**************************************** */}
      <div className="OpenRequests">
        <h2>Open Mentoring Requests</h2>
        <OpenRequests />
        <div className="more">
          <Link to="/SearchResults/RequestSearch">More Requests...</Link>
        </div>
      </div>
      {/* ****************************************FAQ**************************************** */}
      <FAQ />
      {/* ****************************************locationMentors**************************************** */}
      <div className="locationMentors">
        <h2>Mentors in your location</h2>
        <LocationMentors />
      </div>
      {/* ****************************************Footer**************************************** */}
      <Footer />
    </div>
  );
};

export default Home;
