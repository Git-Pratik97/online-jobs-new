// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './layout/Nav';
import BookmarkedFreelancerHome from './components/bookmarked_freelancer/BookmarkedFreelancerHome';
import BookmarkedFreelancerFindById from './components/bookmarked_freelancer/BookmarkedFreelancerFindById';
import BookmarkFreelancerAdd from './components/bookmarked_freelancer/BookmarkFreelancerAdd';
import BookmarkedFreelancerFindBySkill from './components/bookmarked_freelancer/BookmarkedFreelancerFindBySkill';
import BookmarkedFreelancerRemove from './components/bookmarked_freelancer/BookmarkedFreelancerRemove';
import PostJob from './components/job/PostJob';
import CreateFeedback from './components/feedback/Createfeedback';
import RecruiterHome from './components/recruiter/RecruiterHome';
import ShowAllJobApps from './components/job_application/ShowAllJobApps';
import FindFreelancer from './components/freelancer/FindFreelancer';
import FindRecruiter from './components/recruiter/FindRecruiter';
import FreelancerHome from './components/freelancer/FreelancerHome';
import FindFeedback from './components/feedback/FindFeedback';
import DeleteJob from './components/job/CloseJob';
import AwardJob from './components/job/AwardJob';
import FindAllJobApps from './components/job_application/FindAllJobApps';
import MySkillsUpdate from './components/skill/MySkillsUpdate';
import MySkillsAdd from './components/skill/MySkillsAdd';
import MySkills from './components/skill/MySkills';
import MySkillsRemove from './components/skill/MySkillsRemove';




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

        <Route path='/recruiter/Postjob' element={<PostJob/>}/>
        <Route path='/recruiter/createfeedback' element={<CreateFeedback/>}/>
        <Route path='/recruiter' element={<RecruiterHome/>}/>
        <Route path='/recruiter/showalljobapplicationsbyfreelancer' element={<ShowAllJobApps/>}/>
        <Route path='/recruiter/findalljobs' element={<FindAllJobApps/>}/>

        <Route path='/freelancer' element={<FreelancerHome/>}/>
        <Route path='/freelancer/findfreelancer' element={<FindFreelancer/>}/>
        <Route path='/freelancer/awardjob' element={<AwardJob/>}/>
        <Route path='/freelancer/MySkills' element={<MySkills/>}/>
        <Route path='/freelancer/MySkills/AddSkill' element={<MySkillsAdd/>}/>
        <Route path='/freelancer/MySkills/UpdateSkill' element={<MySkillsUpdate/>}/>
        <Route path='/freelancer/MySkills/RemoveSkill' element={<MySkillsRemove/>}/>

        <Route path='/recruiter/findrecruiter' element={<FindRecruiter/>}/>
        <Route path='/recruiter/findfeedbacksbyid' element={<FindFeedback/>}/>
        <Route path='/recruiter/closejob' element={<DeleteJob/>}/>


      </Routes>
    </div>
    </Router>
  );
}

export default App;
