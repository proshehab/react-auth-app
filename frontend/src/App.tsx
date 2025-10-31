

//import Layout from "./components/common/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";


function App() {
  return (
    <>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </>
  );
}

export default App;


    