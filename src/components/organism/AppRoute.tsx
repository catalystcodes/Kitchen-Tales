import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Recipes from "../../pages/Recipes";
import Articles from "../../pages/Articles";
import SignUp from "../../pages/SignUp";
import Login from "../../pages/Login";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
};

export default AppRoute;
