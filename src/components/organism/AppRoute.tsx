import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../molecules/Header";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Recipes from "../../pages/Recipes";
import Articles from "../../pages/Articles";
import Footer from "../molecules/Footer";

const AppRoute = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoute;
