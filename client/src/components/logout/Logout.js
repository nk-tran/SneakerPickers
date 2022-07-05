import React, { useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Logout() {

  const navigate = useNavigate()

  function logout() {
    localStorage.setItem('isLoggedIn', false);
    window.open('/', "_self")

  }

  useEffect(() => {
    logout()
  });

  return (
    <div className="container">
      Signing out!
    </div>
  )
}

export default Logout;