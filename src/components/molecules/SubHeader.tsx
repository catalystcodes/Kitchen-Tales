import { Link } from "react-router";

const SubHeader = () => {
  return (
    <div className="flex ml-[22.4rem] items-center gap-x-[2.7rem] py-[0.6rem]">
      <Link to="/popular">
        <p className="text-[1.1rem] font-normal">Popular</p>
      </Link>
      <Link to="/ingredients">
        <p className="text-[1.1rem] font-normal">Ingredients</p>
      </Link>
      <Link to="/meals-and-dishes">
        <p className="text-[1.1rem] font-normal">Meals & Dishes</p>
      </Link>
      <Link to="/diets">
        <p className="text-[1.1rem] font-normal">Diets</p>
      </Link>
      <Link to="/occasions">
        <p className="text-[1.1rem] font-normal">Occasions</p>
      </Link>
    </div>
  );
};

export default SubHeader;
