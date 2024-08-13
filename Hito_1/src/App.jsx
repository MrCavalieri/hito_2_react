import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/register" component={<Register />} />
        <Route path="/login" component={<Login />} />
      </Routes>
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
