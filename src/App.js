<<<<<<< HEAD
import CareerPage from "./Routes/CareerPage/Index";
import AboutUsPageManish from "./Routes/AboutUsPage/AboutUsPageManish";
import LearnersPage from "./Routes/Learners/LearnersPage";
import CoursesPage from "./Routes/CoursesPage/CoursesPage";
import Blogs from "./Routes/Blogs/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
=======
import Home from './Routes/Home/Index'
import AboutUsPageManish from './Routes/AboutUsPage/AboutUsPageManish';
import Tutors from './Routes/Tutors/Index';
import LearnersPage from './Routes/Learners/LearnersPage';
import Blogs from './Routes/Blogs/Index';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
>>>>>>> be259c2785f7577f663d8da2e710ede9fd60ada4

function App() {
  return (
    <>
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route path="/aboutus" exact component={AboutUsPageManish} />
          <Route path="/" exact component={CareerPage} />
          <Route path="/learners" exact component={LearnersPage} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/courses" exact component={CoursesPage} />
=======
          <Route path='/' exact component={Home}/>
          <Route path='/tutors' exact component={Tutors}/>
          <Route path='/aboutus' exact component={AboutUsPageManish}/>
          <Route path='/learners' exact component={LearnersPage}/>
          <Route path='/blogs' exact component={Blogs}/>
>>>>>>> be259c2785f7577f663d8da2e710ede9fd60ada4
        </Switch>
      </Router>
    </>
  );
}

export default App;
