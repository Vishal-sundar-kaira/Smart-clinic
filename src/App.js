import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Registers from './components/Registers';
import Login from './components/Login';
import Home from './components/Home';
import Ngo from './components/Ngopage';
import Volunteer from './components/Volunteer';
import Restaurant from './components/Restaurant';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/register" element={<Registers />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/ngo" element={<Ngo />} />
          <Route exact path="/volunteer" element={<Volunteer/>} />
          <Route exact path="/restaurant" element={<Restaurant/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
