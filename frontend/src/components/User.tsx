import axios from "axios";
import React, { useEffect, useState } from "react";

const BACKEND_URL = "http://localhost:6969";

interface UserData {
  email: string;
}

function User() {
  const [userData, setUserData] = useState<UserData>({
    email: "",
  });

  useEffect(() => {
    axios.get(`${BACKEND_URL}/user`, { withCredentials: true }).then((res) => {
      setUserData(res.data);
    });
  }, []);

  return <div>User EMAIL : {userData?.email}</div>;
}

export default User;
