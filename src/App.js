// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './layout/Nav';
import BookmarkedFreelancerHome from './components/bookmarked_freelancer/BookmarkedFreelancerHome';
import BookmarkedFreelancerFindById from './components/bookmarked_freelancer/BookmarkedFreelancerFindById';
import BookmarkFreelancerAdd from './components/bookmarked_freelancer/BookmarkFreelancerAdd';
import BookmarkedFreelancerFindBySkill from './components/bookmarked_freelancer/BookmarkedFreelancerFindBySkill';
import BookmarkedFreelancerRemove from './components/bookmarked_freelancer/BookmarkedFreelancerRemove';
import PostJob from './components/Job/PostJobs';
import RecruiterHome from './components/Recruiter/RecruiterHome';




function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/bookmarked_freelancer' element={<BookmarkedFreelancerHome/>}/>
        <Route path='/bookmarked_freelancer/bookmark' element={<BookmarkFreelancerAdd/>}/>
        <Route path='/bookmarked_freelancer/findbyid' element={<BookmarkedFreelancerFindById/>}/>
        <Route path='/bookmarked_freelancer/findbyskill' element={<BookmarkedFreelancerFindBySkill/>}/>
        <Route path='/bookmarked_freelancer/remove' element={<BookmarkedFreelancerRemove/>}/>
        <Route path='/recruiter' element={<RecruiterHome/>}/>
        <Route path='/recruiter/Postjob' element={<PostJob/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
