import IngList from "./IngList";

const Ingredients = () => {
  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <p className="text-[2.2rem] font-semibold ">Ingredients</p>
        <p className="text-[1.3rem] ">
          METRIC <span className="font-light text-[#939393]">| US</span>
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <p className="font-medium text-[1.3rem]">To Roast the Peanuts:</p>
        <IngList ingredients="1 teaspoon vegetable oil" />
        <IngList ingredients="160 g raw peanuts (shelled, with or without the skin)" />
      </div>

      <div className="flex flex-col gap-y-4 my-8">
        <p className="font-medium text-[1.3rem]">To Marinate the Chicken:</p>
        <IngList ingredients="340 g chicken breast (cut into 3/4-inch/2cm cubes)" />
        <IngList ingredients="1 teaspoon vegetable oil" />
        <IngList ingredients="1 teaspoon cornstarch" />
        <IngList ingredients="1 teaspoon shaoxing wine" />
        <IngList ingredients="1/8 teaspoon salt" />
        <IngList ingredients="1 pinch white pepper" />
      </div>

      <div className="flex flex-col gap-y-4">
        <p className="font-medium text-[1.3rem]">Sauce:</p>
        <IngList ingredients="1 tablespoon light soy sauce" />
        <IngList ingredients="1/2 teaspoon dark soy sauce" />
        <IngList ingredients="1 tablespoon rice wine vinegar" />
        <IngList ingredients="1 teaspoon sugar" />
        <IngList ingredients="45 ml water" />
        <IngList ingredients="1 teaspoon cornstarch" />
      </div>

      <div className="flex flex-col gap-y-4 my-8">
        <p className="font-medium text-[1.3rem]">Stir Fry:</p>
        <IngList ingredients="45 ml vegetable oil" />
        <IngList ingredients="3 cloves garlic (smashed and sliced)" />
        <IngList ingredients="2 thin slices ginger (minced)" />
        <IngList ingredients="2 dried red chillies (deseeded and chopped; these can be quite spicy, so adjust according to your own tastes)" />
        <IngList ingredients="1/2 teaspoon sichuan peppercorn powder" />
        <IngList ingredients="6 scallions (white portions only, cut into 3/4-inch/2cm pieces)" />
      </div>
    </div>
  );
};

export default Ingredients;
