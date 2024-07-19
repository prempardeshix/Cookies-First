import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import User from "./components/User";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/user" element={<User></User>}></Route>
          <Route path="/logout" element={<Logout></Logout>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
