import { Link } from "react-router";
import { useNavigate } from "react-router-dom";

import SubHeader from "../atoms/SubHeader";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigateToSignUp = () => {
    navigate("/signUp");
  };
  return (
    <div>
      <header className="flex justify-between items-center px-[8.3rem] border-b-1 border-[#a4a4a4] ">
        <div className="flex items-center gap-x-[4.4rem] ">
          <Link to="/">
            <img src="/LOGO.svg" alt="" />
          </Link>
          <ul className="flex gap-x-[2.7rem]  items-center">
            <li className="text-[1.2rem] font-medium">
              <Link to="/recipes">RECIPES</Link>
            </li>

            <li className="text-[1.2rem] font-medium">
              <Link to="/articles">ARTICLES</Link>
            </li>
            <li className="text-[1.2rem] font-medium">
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-[2.8rem]">
          <p className="text-[1.2rem] font-medium">+ADD A RECIPE</p>
          <div>
            <p className="bg-[#2E5834] text-white py-[0.5rem] px-[1.5rem] rounded-[2.2rem] text-[1.1rem] font-medium cursor-pointer">
              <span>LOGIN</span> /{" "}
              <span onClick={handleNavigateToSignUp}>
                {" "}
                <Link to="/signUp">SIGNUP</Link>
              </span>
            </p>
          </div>
        </div>
      </header>
      <SubHeader />
    </div>
  );
};

export default Navbar;
