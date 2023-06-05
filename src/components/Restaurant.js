import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
export default function Restaurant() {
    const navigate = useNavigate()
    const handleclick=()=>{
        alert("your food details recorded")
        navigate('/')
    }
  return (
    <div class="form-container">
      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="fooditems"
          class="form-field"
          type="text"
          placeholder="fooditems"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="quantity"
          class="form-field"
          type="text"
          placeholder="quantity"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit" onClick={handleclick}>
          submit
        </button>
      </form>
    </div>
  );
}
