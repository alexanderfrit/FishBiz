import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/landingpagehome" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Landing Page PKK
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
