import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home.js"
import SearchPage from "./Pages/SearchPage/SearchPage.js"
import UserProfile from "./Pages/UserProfile/UserProfile.js"
import GetInTouch from "./Pages/GetInTouch/GetInTouch.js"
import OpportunitySearch from "./Pages/OpportunitySearch/OpportunitySearch.js"
import RequestSearch from "./Pages/RequestSearch/RequestSearch.js"
import NotFound from "./Pages/NotFound/NotFound.js"


function App() {
  return (
    <div className="App">
      <div className='app_overlay'>
        <div className='app_container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchPage" element={<SearchPage />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/getInTouch" element={<GetInTouch />} />
            <Route path="/opportunitySearch" element={<OpportunitySearch />} />
            <Route path="/OpenRequests" element={<RequestSearch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
