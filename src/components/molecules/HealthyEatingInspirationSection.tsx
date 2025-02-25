import SubHeaderForSection from "./SubHeaderForSection";

const HealthyEatingInspirationSection = () => {
  return (
    <div className="mb-[7.1rem]">
      <SubHeaderForSection
        topic="Healthy Eating Inspiration"
        viewMoreText="VIEW ALL"
      />
      <div className="flex items-center gap-x-[2.2rem]">
        <img src="/healthyEatingImage.svg" alt="" />
        <div>
          <div className="border-b border-[#6F6F6F] pb-[1.3rem]">
            <p className="text-[1.5rem] font-medium">
              Delicious Dishes Packed with Nutrition
            </p>
            <p className="text-[1.1rem] ">
              Explore a collection of mouthwatering recipes that not only
              delight your taste buds but also pack a powerful nutritional
              punch.
            </p>
          </div>
          <div className="border-b border-[#6F6F6F] pb-[1.3rem]">
            <p className="text-[1.5rem] font-medium pt-[1.3rem]">
              Fuel Your Day with Plant-Based Power
            </p>
            <p className="text-[1.1rem] ">
              Dive into the world of plant-based goodness with recipes that
              provide both energy and exceptional flavors, making each bite a
              celebration of health.
            </p>
          </div>
          <div className="border-b border-[#6F6F6F] pb-[1.3rem]">
            <p className="text-[1.5rem] font-medium pt-[1.3rem]">
              One-Pan Wonders for Stress-Free Cooking
            </p>
            <p className="text-[1.1rem] ">
              Simplify your culinary journey with stress-free, one-pan
              wonders—recipes that prioritize convenience without compromising
              on nutritional value or taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyEatingInspirationSection;
