import React from 'react';
import "./style.css"
import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar'

const Volunteer = () => {
    <NavBar />
    const navigate=useNavigate();
    const handleclick=()=>{
        alert("you can deliver the food")
        navigate('/')
    }
    const handlealert=()=>{
        alert("order cancelled")
    }
  return (
    <>
      <div className="main">
        <div className="heading" style={{ fontSize: "40px" }}>
          Volunteer Page
        </div>

        <div className="card">
          <div className="title">
            <br />
            <h1>Restaurant Name: JW Marriot</h1>
            <br />
            <h1>Restaurant Location: Juhu West</h1>
            <br />
            <h1>Restaurant Contact: +91 9820448222</h1>
            <br />
            <h1>NGO Name: Smile Foundation</h1>
            <br />
            <h1>NGO Location: Borivali</h1>
            <br />
            <h1>NGO Contact: +91 765432198</h1>
            <br />
          </div>
          <div className="des">
            <button onClick={handleclick}>Accept</button>
            <button onClick={handlealert}>Decline</button>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <br />
            <h1>Restaurant Name: Courtyard</h1>
            <br />
            <h1>Restaurant Location: Andheri</h1>
            <br />
            <h1>Restaurant Contact: +91 79777815264</h1>
            <br />
            <h1>NGO Name: Aankh Foundation</h1>
            <br />
            <h1>NGO Location: Mira Road</h1>
            <br />
            <h1>NGO Contact: +91 769887678</h1>
            <br />
          </div>
          <div className="des">
            <button onClick={handleclick}>Accept</button>
            <button onClick={handlealert}>Decline</button>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <br />
            <h1>Restaurant Name: Veg Sagar</h1>
            <br />
            <h1>Restaurant Location: Bhayandar</h1>
            <br />
            <h1>Restaurant Contact: +91 798727578</h1>
            <br />
            <h1>NGO Name: Live Foundation</h1>
            <br />
            <h1>NGO Location: Chembur</h1>
            <br />
            <h1>NGO Contact: +91 765432198</h1>
            <br />
          </div>
          <div className="des">
            <button onClick={handleclick}>Accept</button>
            <button onClick={handlealert}>Decline</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Volunteer;
