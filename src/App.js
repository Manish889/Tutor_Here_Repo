import Home from './Routes/Home/Index'
import AboutUsPageManish from './Routes/AboutUsPage/AboutUsPageManish';
import Tutors from './Routes/Tutors/Index';
import LearnersPage from './Routes/Learners/LearnersPage';
import Blogs from './Routes/Blogs/Index';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/tutors' exact component={Tutors}/>
          <Route path='/aboutus' exact component={AboutUsPageManish}/>
          <Route path='/learners' exact component={LearnersPage}/>
          <Route path='/blogs' exact component={Blogs}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
