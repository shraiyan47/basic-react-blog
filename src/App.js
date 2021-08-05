
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Notfound from './Notfound';


function App() {
 
  return (
    <Router>
      <div className="App">
        
        <Navbar /> 
        
        <div className="content">
          {/* <Home /> */}
          <Switch>
            <Route path="/" exact ><Home /></Route>
            <Route path="/create"><Create /></Route>
            <Route path="/blogs/:id"><BlogDetails /></Route>
            <Route path="*"><Notfound/></Route>
          </Switch>
  
        </div>
      </div>
    </Router>
  );
}

export default App;
