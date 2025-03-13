import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Recipes from "../../pages/Recipes";
import Articles from "../../pages/Articles";
import SignUp from "../../pages/SignUp";
import Login from "../../pages/Login";
import CookPage from "../../pages/CookPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/articles" element={<Articles />} />
      {/* <Route path="/" element={<RecipesDetailsPage />} /> */}
      <Route path="/cook" element={<CookPage />} />
    </Routes>
  );
};

export default AppRoute;
