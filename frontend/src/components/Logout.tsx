import React, { useEffect } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:6969";

function Logout() {
  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/logout`, {}, { withCredentials: true })
      .then(() => {
        alert("Logged Out!");
      });
  }, []);

  return <div></div>;
}

export default Logout;
