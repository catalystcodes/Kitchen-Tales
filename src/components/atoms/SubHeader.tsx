// import { Link } from "react-router";

// const SubHeader = () => {
//   return (
//     <div className="flex ml-[22.4rem] items-center gap-x-[2.7rem] py-[0.6rem]">
//       <Link to="/popular">
//         <p className="text-[1.1rem] font-normal">Popular</p>
//       </Link>
//       <Link to="/ingredients">
//         <p className="text-[1.1rem] font-normal">Ingredients</p>
//       </Link>
//       <Link to="/meals-and-dishes">
//         <p className="text-[1.1rem] font-normal">Meals & Dishes</p>
//       </Link>
//       <Link to="/diets">
//         <p className="text-[1.1rem] font-normal">Diets</p>
//       </Link>
//       <Link to="/occasions">
//         <p className="text-[1.1rem] font-normal">Occasions</p>
//       </Link>
//     </div>
//   );
// };

// export default SubHeader;
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const SubHeader = () => {
  const location = useLocation();
  const [showPopularDropdown, setShowPopularDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowPopularDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const popularOptions = [
    { path: "/popular/top-recipes", label: "Top Recipes This Week" },
    { path: "/popular/most-viewed", label: "Most Viewed Recipes" },
    { path: "/popular/editors-picks", label: "Editor's Picks" },
  ];

  const navItems = [
    { path: "/ingredients", label: "Ingredients" },
    { path: "/meals-and-dishes", label: "Meals & Dishes" },
    { path: "/diets", label: "Diets" },
    { path: "/occasions", label: "Occasions" },
  ];

  return (
    <nav className="flex pl-[2rem] py-2 md:ml-80 ">
      <div className="flex items-center gap-x-8 ">
        {/* Popular dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowPopularDropdown(!showPopularDropdown)}
            className={`text-lg font-normal flex items-center gap-1 ${
              location.pathname.includes("/popular")
                ? "text-blue-600 font-medium"
                : "hover:text-gray-600"
            }`}
          >
            Popular
          </button>

          {showPopularDropdown && (
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white z-10 py-1">
              {popularOptions.map((option) => (
                <Link
                  key={option.path}
                  to={option.path}
                  onClick={() => setShowPopularDropdown(false)}
                >
                  <div
                    className={`block px-4 py-2 text-sm ${
                      isActive(option.path)
                        ? "bg-gray-100 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {option.label}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Other navigation items */}
        {navItems.map((item) => (
          <Link to={item.path} key={item.path}>
            <p
              className={`text-lg font-normal ${
                isActive(item.path)
                  ? "text-blue-600 font-medium"
                  : "hover:text-gray-600"
              }`}
            >
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SubHeader;
