import Homepage from './Routes/Home/Index';
import Tutors from './Routes/Tutors/Index';
import AboutUsPageManish from "./Routes/AboutUsPage/AboutUsPageManish";
import LearnersPage from "./Routes/Learners/LearnersPage";
import CoursesPage from "./Routes/CoursesPage/CoursesPage";
import Blogs from "./Routes/Blogs/Index";
import CareerPage from './Routes/CareerPage/CareerPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/tutors" exact component={Tutors} />
          <Route path="/aboutus" exact component={AboutUsPageManish} />
          <Route path="/learners" exact component={LearnersPage} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/courses" exact component={CoursesPage} />
          <Route path="/careers" exact component={CareerPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
