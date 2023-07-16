import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home.js"
import GetInTouch from "./Pages/GetInTouch/GetInTouch.js"
import NotFound from "./Pages/NotFound/NotFound.js"
import Login from "./Pages/Login/Login.js"
import Signup from "./Pages/Signup/Signup.js"
import ProfileInfo from './Pages/ProfileInfo/ProfileInfo.js';
import EditMentorPortfolio from './Pages/EditMentorPortfolio/EditMentorPortfolio.js';
import SearchResults from './Pages/SearchResults/SearchResults.js';
import MentorshipDetails from './Pages/MentorshipDetails/MentorshipDetails.js';
import MenteeShipDetails from './Pages/MenteeShipDetails/MenteeShipDetails.js';
import ViewProfile from './Pages/ViewProfile/ViewProfile.js';
import UserProfile from './Pages/UserProfile/UserProfile.js'



import MentorSearch from './Components/SearchComponent/MentorSearch/MentorSearch.js';
import MenteeSearch from './Components/SearchComponent/MenteeSearch/MenteeSearch.js';
import OpportunitySearch from './Components/SearchComponent/OpportunitySearch/OpportunitySearch.js';
import RequestSearch from './Components/SearchComponent/RequestSearch/RequestSearch.js';



function App() {
  return (
    <div className="App">
      <div className='app_overlay'>
        <div className='app_container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/GetInTouch" element={<GetInTouch />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profileinfo" element={<ProfileInfo />} />
            <Route path="/EditMentorPortfolio" element={<EditMentorPortfolio />} />
            <Route path="/UserProfile/:owner/:type" element={<UserProfile />} />
            <Route path="/SearchResults" element={<SearchResults />} >
              <Route path="MentorSearch" element={<MentorSearch />} />
              <Route path="MenteeSearch" element={<MenteeSearch />} />
              <Route path="OpportunitySearch" element={<OpportunitySearch />} />
              <Route path="RequestSearch" element={<RequestSearch />} />
            </Route>
            <Route path="/MentorshipDetails/:id" element={<MentorshipDetails />} />
            <Route path="/MenteeShipDetails/:id" element={<MenteeShipDetails />} />
            <Route path="/ViewProfile/:type/:owner" element={<ViewProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
