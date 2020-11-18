import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
          <Route exact path="/project" component={Project}/>
          <Route exact path="/contact" component={Contact}/>
          
        
      </Router>
      

    </div>
  );
}

export default App;
