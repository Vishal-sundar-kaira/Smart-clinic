import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
// import { Routes, Route } from "react-router-dom"
// import {BrowserRouter as Router} from "react-router-dom";
// import Registers from './components/Registers';
function App() {
  return (
    // <Router>
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      {/* <Routes>
        <Route exact path="/register" element={<Registers/>}></Route>

      </Routes> */}
    
    </div>
    // </Router>
  );
}

export default App;
