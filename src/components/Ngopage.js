import React from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";

const Ngopage = () => {
    const navigate=useNavigate();
    const handleclick=()=>{
        alert("order placed")
        navigate('/')
    }
  return (
    <>
      <div className="main">
        <div className="heading" style={{ fontSize: "40px" }}>
          Choose your order
        </div>

        <div className="card">
          <div className="title">
            <br />
            <h1>Restaurant Name: JW Marriot</h1>
            <br />
            <h1>Restaurant Location: Juhu West</h1>
            <br />
            <h1>Restaurant Contact: +91 9820235755 </h1>
            <br />
            <h1>Food Items: Roti, Butter Chicken </h1>
            <br />
            <h1>Quantity: 40 people </h1>
            <br />
          </div>
          <div className="des">
            <button onClick={handleclick}>Place Order</button>
          </div>
        </div>

        <div className="card">
          <div className="title">
            <br />
            <h1>Restaurant Name: Courtyard </h1>
            <br />
            <h1>Restaurant Location: Andheri</h1>
            <br />
            <h1>Restaurant Contact: +91 7977815264</h1>
            <br />
            <h1>Food Items: Rice, Dal, Sabji</h1>
            <br />
            <h1>Quantity: 50 people</h1>
            <br />
          </div>
          <div className="des">
            <button onClick={handleclick}>Place Order</button>
          </div>
        </div>
        <div className="card">
          <div className="title">
            <br />
            <h1>Restaurant Name: missmerry </h1>
            <br />
            <h1>Restaurant Location: Andheri</h1>
            <br />
            <h1>Restaurant Contact: +91 7977815264</h1>
            <br />
            <h1>Food Items: Rice, Dal, Sabji,sheerkhurma</h1>
            <br />
            <h1>Quantity: 50 people</h1>
            <br />
          </div>
          <div className="des">
            <button onClick={handleclick}>Place Order</button>
          </div>
        </div>
        <div className="card">
          <div className="title">
            <br />
            <h1>Restaurant Name: Veg Sagar </h1>
            <br />
            <h1>Restaurant Location: Bhayandar</h1>
            <br />
            <h1>Restaurant Contact: +91 798727578</h1>
            <br />
            <h1>Food Items: Chicken Biryani</h1>
            <br />
            <h1>Quantity: 20 people</h1>
            <br />
          </div>
          <div className="des">
            <button onClick={handleclick}>Place Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ngopage;
