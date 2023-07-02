import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import MentoringRequestSection from './Pages/MentoringRequest/MentoringRequest';
>>>>>>> f544ea2 (ss)
=======
>>>>>>> 1441eef0922ca4fe3a71059534ecb57e54ce1a4d
import Home from "./Pages/Home/Home.js"
import SearchPage from "./Pages/SearchPage/SearchPage.js"
import UserProfile from "./Pages/UserProfile/UserProfile.js"
import GetInTouch from "./Pages/GetInTouch/GetInTouch.js"
<<<<<<< HEAD
<<<<<<< HEAD
import Opportunity from "./Pages/Opportunity/Opportunity.js"
=======
>>>>>>> f544ea2 (ss)
=======
import Opportunity from "./Pages/Opportunity/Opportunity.js"
>>>>>>> 1441eef0922ca4fe3a71059534ecb57e54ce1a4d
import NotFound from "./Pages/NotFound/NotFound.js"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/getInTouch" element={<GetInTouch />} />
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/opportunity" element={<Opportunity />} />
=======
        <Route path="/MentoringRequest" element={<MentoringRequestSection />} />
>>>>>>> f544ea2 (ss)
=======
        <Route path="/opportunity" element={<Opportunity />} />
>>>>>>> 1441eef0922ca4fe3a71059534ecb57e54ce1a4d
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
