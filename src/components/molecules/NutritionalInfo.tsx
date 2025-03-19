const NutritionalInfo = () => {
  return (
    <div className="mb-10">
      <p className="text-[2rem] font-medium text-[#1D1D1D] mb-6">
        Nutritional Information
      </p>
      <div className="bg-white border-1 border-[#D9D9D9] py-5 px-7 ">
        <p className="text-[1.2rem] border-b-1 border-[#D9D9D9] =py-2 ">
          Servings per recipe: 4
        </p>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] bg-[#] py-2  ">
          <p className="font-semibold text-[1.2rem]">Per Serving</p>
          <p className="font-semibold text-[1.2rem]">% Daily Value*</p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Calories: <span className="font-normal">440</span>
          </p>
          <p></p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Carbohydrates: <span className="font-normal">11g</span>
          </p>
          <p className="font-medium text-[1.2rem]">4%</p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Protein: <span className="font-normal">29g</span>
          </p>
          <p className="font-medium text-[1.2rem]">58%</p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Fat: <span className="font-normal">33g</span>
          </p>
          <p className="font-medium text-[1.2rem]">51%</p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Saturated Fat: <span className="font-normal">6g</span>
          </p>
          <p className="font-medium text-[1.2rem]">30%</p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Cholesterol: <span className="font-normal">54mg</span>
          </p>
          <p className="font-medium text-[1.2rem]">18%</p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Sodium: <span className="font-normal">477mg</span>
          </p>
          <p className="font-medium text-[1.2rem]">20%</p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Potassium: <span className="font-normal">654mg</span>
          </p>
          <p className="font-medium text-[1.2rem]">19%</p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Fiber: <span className="font-normal">4g</span>
          </p>
          <p className="font-medium text-[1.2rem]">16%</p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Sugar: <span className="font-normal">2g</span>
          </p>
          <p className="font-medium text-[1.2rem]">2%</p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Vitamin A: <span className="font-normal">270IU</span>
          </p>
          <p className="font-medium text-[1.2rem]">5%</p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Vitamin C: <span className="font-normal">5.1mg</span>
          </p>
          <p className="font-medium text-[1.2rem]">6%</p>
        </div>
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Calcium: <span className="font-normal">60mg</span>
          </p>
          <p className="font-medium text-[1.2rem]">6%</p>
        </div>
        <div className="flex items-center justify-between border-b-[0.3rem] border-[#D9D9D9] py-2">
          <p className="font-medium text-[1.2rem]">
            Iron: <span className="font-normal">2.1mg</span>
          </p>
          <p className="font-medium text-[1.2rem]">12%</p>
        </div>
        <p className="text-[1.2rem] italic text-[#444444] mt-4">
          *Based on a 2,000 calorie diet
        </p>
      </div>
    </div>
  );
};

export default NutritionalInfo;
