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

// Define types for our navigation options
interface NavOption {
  path: string;
  label: string;
}

const SubHeader: React.FC = () => {
  const location = useLocation();
  const [showPopularDropdown, setShowPopularDropdown] =
    useState<boolean>(false);
  const [showIngredientsDropdown, setShowIngredientsDropdown] =
    useState<boolean>(false);
  const [showMealsDropdown, setShowMealsDropdown] = useState<boolean>(false);
  const [showDietsDropdown, setShowDietsDropdown] = useState<boolean>(false);
  const [showOccasionsDropdown, setShowOccasionsDropdown] =
    useState<boolean>(false);

  const popularDropdownRef = useRef<HTMLDivElement>(null);
  const ingredientsDropdownRef = useRef<HTMLDivElement>(null);
  const mealsDropdownRef = useRef<HTMLDivElement>(null);
  const dietsDropdownRef = useRef<HTMLDivElement>(null);
  const occasionsDropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string): boolean => location.pathname === path;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        popularDropdownRef.current &&
        !popularDropdownRef.current.contains(event.target as Node)
      ) {
        setShowPopularDropdown(false);
      }
      if (
        ingredientsDropdownRef.current &&
        !ingredientsDropdownRef.current.contains(event.target as Node)
      ) {
        setShowIngredientsDropdown(false);
      }
      if (
        mealsDropdownRef.current &&
        !mealsDropdownRef.current.contains(event.target as Node)
      ) {
        setShowMealsDropdown(false);
      }
      if (
        dietsDropdownRef.current &&
        !dietsDropdownRef.current.contains(event.target as Node)
      ) {
        setShowDietsDropdown(false);
      }
      if (
        occasionsDropdownRef.current &&
        !occasionsDropdownRef.current.contains(event.target as Node)
      ) {
        setShowOccasionsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const popularOptions: NavOption[] = [
    { path: "/popular/top-recipes", label: "Top Recipes This Week" },
    { path: "/popular/most-viewed", label: "Most Viewed Recipes" },
    { path: "/popular/editors-picks", label: "Editor's Picks" },
    { path: "/popular/trending-cuisines", label: "Trending Cuisines" },
    { path: "/popular/quick-and-easy-meals", label: "Quick & Easy Meals" },
  ];

  const ingredientsOptions: NavOption[] = [
    { path: "/ingredients/mushroom", label: "Mushroom" },
    { path: "/ingredients/broccoli", label: "Broccoli" },
    { path: "/ingredients/chicken", label: "Chicken" },
    { path: "/ingredients/shrimp", label: "Shrimp" },
    { path: "/ingredients/tofu", label: "Tofu" },
    { path: "/ingredients/Pasta", label: "Pasta" },
    { path: "/ingredients/Rice", label: "Rice" },
    { path: "/ingredients/Lentils", label: "Lentils" },
    { path: "/ingredients/beans", label: "Beans" },
    { path: "/ingredients/apple", label: "Apple" },
    { path: "/ingredients/tomato", label: "Tomato" },
    { path: "/ingredients/butter", label: "Butter" },
    { path: "/ingredients/eggs", label: "Eggs" },
  ];

  const mealsOptions: NavOption[] = [
    { path: "/meals-and-dishes/breakfast", label: "Breakfast" },
    { path: "/meals-and-dishes/brunch", label: "Brunch" },
    { path: "/meals-and-dishes/lunch", label: "Lunch" },
    { path: "/meals-and-dishes/dinner", label: "Dinner" },
    { path: "/meals-and-dishes/dessert", label: "Dessert" },
    { path: "/meals-and-dishes/appetizer", label: "Appetizer" },
    { path: "/meals-and-dishes/snack", label: "Snack" },
    { path: "/meals-and-dishes/side-dish", label: "Side Dish" },
    { path: "/meals-and-dishes/salad", label: "Salad" },
    { path: "/meals-and-dishes/soup", label: "Soup" },
    { path: "/meals-and-dishes/main-course", label: "Main Course" },
    { path: "/meals-and-dishes/beverages", label: "Beverages" },
  ];

  const dietsOptions: NavOption[] = [
    { path: "/diets/vegetarian-and-vegan", label: "Vegetarian & Vegan" },
    { path: "/diets/gluten-free", label: "Gluten-Free" },
    { path: "/diets/dairy-free", label: "Dairy-Free" },
    { path: "/diets/Keto", label: "Keto" },
    { path: "/diets/paleo", label: "Paleo" },
    { path: "/diets/low-carb", label: "Low-Carb" },
    { path: "/diets/high-protein", label: "High-Protein" },
    //
  ];

  const occasionsOptions: NavOption[] = [
    {
      path: "/occasions/holidays-celebrations",
      label: "Holidays & Celebrations",
    },
    { path: "/occasions/weeknight-dinners", label: "Weeknight Dinners" },
    { path: "/occasions/weekend-brunches", label: "Weekend Brunches" },
    { path: "/occasions/potlucks-parties", label: "Potlucks & Parties" },
    { path: "/occasions/romantic-dinners", label: "Romantic Dinners" },
    { path: "/occasions/family-meals", label: "Family Meals" },
    { path: "/occasions/grilling-BBQ", label: "Grilling & BBQ" },
  ];

  // Renders a dropdown menu
  const renderDropdown = (
    options: NavOption[],
    isOpen: boolean,
    closeDropdown: () => void
  ) => {
    if (!isOpen) return null;

    return (
      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10 py-1">
        {options.map((option) => (
          <Link key={option.path} to={option.path} onClick={closeDropdown}>
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
    );
  };

  return (
    <nav className="flex pl-[2rem] py-2 md:ml-80">
      <div className="flex items-center gap-x-8">
        {/* Popular dropdown */}
        <div className="relative" ref={popularDropdownRef}>
          <button
            type="button"
            onClick={() => setShowPopularDropdown(!showPopularDropdown)}
            className={`text-lg font-normal  ${
              location.pathname.includes("/popular")
                ? "text-blue-600 font-medium"
                : "hover:text-gray-600"
            }`}
          >
            Popular
          </button>

          {renderDropdown(popularOptions, showPopularDropdown, () =>
            setShowPopularDropdown(false)
          )}
        </div>

        {/* Ingredients dropdown */}
        <div className="relative" ref={ingredientsDropdownRef}>
          <button
            type="button"
            onClick={() => setShowIngredientsDropdown(!showIngredientsDropdown)}
            className={`text-lg font-normal ${
              location.pathname.includes("/ingredients")
                ? "text-blue-600 font-medium"
                : "hover:text-gray-600"
            }`}
          >
            Ingredients
          </button>

          {renderDropdown(ingredientsOptions, showIngredientsDropdown, () =>
            setShowIngredientsDropdown(false)
          )}
        </div>

        {/* Meals & Dishes dropdown */}
        <div className="relative" ref={mealsDropdownRef}>
          <button
            type="button"
            onClick={() => setShowMealsDropdown(!showMealsDropdown)}
            className={`text-lg font-normal ${
              location.pathname.includes("/meals-and-dishes")
                ? "text-blue-600 font-medium"
                : "hover:text-gray-600"
            }`}
          >
            Meals & Dishes
          </button>

          {renderDropdown(mealsOptions, showMealsDropdown, () =>
            setShowMealsDropdown(false)
          )}
        </div>

        {/* Diets dropdown */}
        <div className="relative" ref={dietsDropdownRef}>
          <button
            type="button"
            onClick={() => setShowDietsDropdown(!showDietsDropdown)}
            className={`text-lg font-normal ${
              location.pathname.includes("/diets")
                ? "text-blue-600 font-medium"
                : "hover:text-gray-600"
            }`}
          >
            Diets
          </button>

          {renderDropdown(dietsOptions, showDietsDropdown, () =>
            setShowDietsDropdown(false)
          )}
        </div>

        {/* Occasions dropdown */}
        <div className="relative" ref={occasionsDropdownRef}>
          <button
            type="button"
            onClick={() => setShowOccasionsDropdown(!showOccasionsDropdown)}
            className={`text-lg font-normal ${
              location.pathname.includes("/occasions")
                ? "text-blue-600 font-medium"
                : "hover:text-gray-600"
            }`}
          >
            Occasions
          </button>

          {renderDropdown(occasionsOptions, showOccasionsDropdown, () =>
            setShowOccasionsDropdown(false)
          )}
        </div>
      </div>
    </nav>
  );
};

export default SubHeader;
