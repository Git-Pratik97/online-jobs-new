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
import Login from './components/Login/Login';
import Registration from './components/Login/Registration';
import FreelancerFindById from './components/freelancer/FreelancerFindById';
import FreelancerSearchJobs from './components/freelancer/FreelancerSearchJobs';
import FreelancerBookmarkJobs from './components/boomarked_job/FreelancerBookmarkJobs';
import Admin from './components/admin/Admin';

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

        <Route path='/Postjob' element={<PostJob/>}/>
        <Route path='/createfeedback' element={<CreateFeedback/>}/>
        <Route path='/recruiter' element={<RecruiterHome/>}/>
        <Route path='/showalljobapplicationsbyfreelancer' element={<ShowAllJobApps/>}/>
        <Route path='/findalljobs' element={<FindAllJobApps/>}/>

        <Route path='/freelancer' element={<FreelancerHome/>}/>
        <Route path='admin/freelancer/findfreelancer' element={<FindFreelancer/>}/>
        <Route path='/awardjob' element={<AwardJob/>}/>
        <Route path='/MySkills' element={<MySkills/>}/>
        <Route path='freelancer/MySkills/AddSkill' element={<MySkillsAdd/>}/>
        <Route path='freelancer/MySkills/UpdateSkill' element={<MySkillsUpdate/>}/>
        <Route path='freelancer/MySkills/RemoveSkill' element={<MySkillsRemove/>}/>

        <Route path='admin/recruiter/findrecruiter' element={<FindRecruiter/>}/>
        <Route path='/findfeedbacksbyid' element={<FindFeedback/>}/>
        <Route path='/closejob' element={<DeleteJob/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/findbyid' element={<FreelancerFindById/>}/>
        <Route path='/searchjobs' element={<FreelancerSearchJobs/>}/>
        <Route path='/bookmarkjobs' element={<FreelancerBookmarkJobs/>}/>

        <Route path='/admin' element={<Admin/>}/>


      </Routes>
    </div>
    </Router>
  );
}

export default App;
