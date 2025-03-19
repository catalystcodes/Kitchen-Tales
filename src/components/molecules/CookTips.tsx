import { useState } from "react";

const CookTips = () => {
  const [servings, setServings] = useState(30);
  return (
    <div className="mt-20">
      <p className="text-[2.2rem] font-semibold mb-6">Cook’s Tips</p>
      <ul className="list-disc list-inside">
        <li>
          As with all stir-fries, the dish cooks quickly, so be sure to have all
          your ingredients prepped before you start cooking.{" "}
        </li>
        <li>
          Cook the Kung Pao sauce down until it reduces to a syrupy consistency
          with quite an intense flavour. That’s the Kung Pao way!!
        </li>
        <li>
          Chinese Cooking Wine, also known as Shaoxing wine or Shaosing wine, is
          the secret ingredient that makes homemade Chinese food truly taste as
          good as talk out
        </li>
      </ul>
      <div className="flex items-center justify-center py-10 bg-[#F3F3F3] rounded-[20px] mx-10 my-20">
        <div className="flex items-center flex-col border-r-2 border-[#D6D6D6] px-16 ">
          <img src="/bakeIcon.svg" alt="" />
          <p className="font-medium text-[1.3rem] mt-1">Prep Time</p>
          <p className="text-[#848484]  text-[1.3rem]">30 mins</p>
        </div>
        <div className="flex items-center flex-col border-r-2 border-[#D6D6D6] px-16">
          <img src="/cookingIcon.svg" alt="" />
          <p className="font-medium text-[1.3rem] mt-1">Cook Time</p>
          <p className="text-[#848484]  text-[1.3rem]">10 mins</p>
        </div>
        <div className="flex items-center flex-col border-r-2 border-[#D6D6D6] px-16">
          <img src="/trayIcon.svg" alt="" />
          <p className="font-medium text-[1.3rem] mt-1">Total Time</p>
          <p className="text-[#848484]  text-[1.3rem]">40 mins</p>
        </div>
        <div className="flex items-center flex-col  px-16">
          <img src="/servingIcon.svg" alt="" />
          <p className="font-medium text-[1.3rem] mt-1">Servings</p>
          <div className="relative">
            <select
              value={servings}
              onChange={(e) => setServings(Number(e.target.value))}
              className="appearance-none bg-white rounded px-3 py-1 text-xl text-gray-500"
            >
              {[2, 4, 6, 8, 10, 20, 30, 40, 50].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <div className="absolute right-1 top-1">
              <img src="/ServingPlusIcon.svg" alt="" className="rotate-180 " />
              <img src="/ServingPlusIcon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookTips;
