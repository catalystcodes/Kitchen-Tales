import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[8.3rem] border-b-1 border-[#6F6F6F] ">
      <div className="flex items-center gap-x-[4.4rem] ">
        <div>
          <img src="/LOGO.svg" alt="" />
        </div>
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
            <span>LOGIN</span> / <span>SIGNUP</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
