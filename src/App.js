import CareerPage from './Routes/CareerPage/Index'
import AboutUsPageManish from './Routes/AboutUsPage/AboutUsPageManish';
import LearnersPage from './Routes/Learners/LearnersPage';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={CareerPage}/>
          <Route path='/aboutus' exact component={AboutUsPageManish}/>
          <Route path='/learners' exact component={LearnersPage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
