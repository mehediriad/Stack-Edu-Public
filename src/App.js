import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import AllCourses from './components/AllCourses/AllCourses';
import FeaturedCourses from './components/FeaturedCourses/FeaturedCourses';
import Footer from './components/Footer/Footer';
import Membership from './components/Membership/Membership';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <FeaturedCourses></FeaturedCourses>
          </Route>
          <Route path="/home">
            <FeaturedCourses></FeaturedCourses>
          </Route>
          <Route path="/courses">
            <AllCourses></AllCourses>
          </Route>
          <Route path="/courses">
            <AllCourses></AllCourses>
          </Route>
          <Route path="/membership">
            <Membership></Membership>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
