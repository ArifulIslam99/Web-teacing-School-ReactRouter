
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './Component/NotFound/NotFound'
import Home from './Component/Home/Home'
import AboutUs from './Component/AboutUs/AboutUs'
import Footer from './Component/Footer/Footer';
import Services from './Component/Services/Services';
import Review from './Component/Review/Review';


function App() {
  return (
    <div className="App">
         <Router>
            <Header></Header>
            <Switch> 
                <Route exact path='/'>
                  <Home></Home>
                </Route>
                <Route exact path='/home'>
                  <Home></Home>
                </Route>
                <Route path='/aboutus'>
                  <AboutUs></AboutUs>
                </Route>
                <Route path='/courses'>
                  <Services></Services>
                </Route>
                <Route path='/review'>
                  <Review></Review>
                </Route>

                <Route path='*'>
                  <NotFound></NotFound>
                </Route>
            </Switch>
            <Footer></Footer>
         </Router>
    </div>
  );
}

export default App;
