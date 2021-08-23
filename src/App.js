import CareerPage from './Routes/CareerPage/Index'
import AboutUsPageManish from './Routes/AboutUsPage/AboutUsPageManish';
import LearnersPage from './Routes/Learners/LearnersPage';
import Blogs from './Routes/Blogs/Index';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/aboutus' exact component={AboutUsPageManish}/>
          <Route path='/' exact component={CareerPage}/>
          <Route path='/learners' exact component={LearnersPage}/>
          <Route path='/blogs' exact component={Blogs}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
