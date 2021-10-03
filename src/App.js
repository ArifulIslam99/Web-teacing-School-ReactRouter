
import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './Component/NotFound/NotFound'
import Home from './Component/Home/Home'
import AboutUs from './Component/AboutUs/AboutUs'


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
                <Route path='*'>
                  <NotFound></NotFound>
                </Route>
            </Switch>
         </Router>
    </div>
  );
}

export default App;
