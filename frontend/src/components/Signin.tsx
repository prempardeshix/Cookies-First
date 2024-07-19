import React, { useState } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:6969";

function Signin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function clickHandler() {
    await axios.post(
      `${BACKEND_URL}/signin`,
      { email, password },
      { withCredentials: true }
    );
    alert("Logged In");
  }

  return (
    <div>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="EMAIL"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="PASSWORD"
      />
      <button onClick={clickHandler}>Signin</button>
    </div>
  );
}

export default Signin;
