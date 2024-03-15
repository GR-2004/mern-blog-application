import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Projects from "./pages/Projects.jsx";
import Header from "./components/Header.jsx";
import FooterCom from "./components/Footer.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute copy.jsx";
import CreatePost from "./pages/CreatePost.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path="/create-post" element={<CreatePost />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <FooterCom />
      </BrowserRouter>
    </div>
  );
};

export default App;
