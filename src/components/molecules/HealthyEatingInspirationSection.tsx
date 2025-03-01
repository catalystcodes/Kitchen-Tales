import SubHeaderForSection from "../atoms/SubHeaderForSection";

interface HealthyEatingInspirationSectionProps {
  img: string;
  header1: string;
  desc1: string;
  header2: string;
  desc2: string;
  header3: string;
  desc3: string;
}

const HealthyEatingInspirationSection = ({
  img,
  desc1,
  header1,
  desc2,
  header2,
  desc3,
  header3,
}: HealthyEatingInspirationSectionProps) => {
  return (
    <div>
      <SubHeaderForSection
        topic="Healthy Eating Inspiration"
        viewMoreText="VIEW ALL"
      />
      <div className="flex items-center gap-x-[2.2rem]">
        <img src={img} alt="" />
        {/* /healthyEatingImage.svg */}
        <div>
          <div className="border-b border-[#6F6F6F] pb-[1.3rem]">
            <p className="text-[1.5rem] font-medium">{header1}</p>
            {/* Delicious Dishes Packed with Nutrition */}

            <p className="text-[1.1rem] ">{desc1}</p>
            {/* Explore a collection of mouthwatering recipes that not only
              delight your taste buds but also pack a powerful nutritional
              punch. */}
          </div>
          <div className="border-b border-[#6F6F6F] pb-[1.3rem]">
            <p className="text-[1.5rem] font-medium pt-[1.3rem]">{header2}</p>
            {/* Fuel Your Day with Plant-Based Power */}
            <p className="text-[1.1rem] ">{desc2}</p>
            {/* Dive into the world of plant-based goodness with recipes that
              provide both energy and exceptional flavors, making each bite a
              celebration of health. */}
          </div>
          <div className="border-b border-[#6F6F6F] pb-[1.3rem]">
            <p className="text-[1.5rem] font-medium pt-[1.3rem]">{header3}</p>
            {/* One-Pan Wonders for Stress-Free Cooking */}
            <p className="text-[1.1rem] ">{desc3}</p>
            {/* Simplify your culinary journey with stress-free, one-pan
              wonders—recipes that prioritize convenience without compromising
              on nutritional value or taste. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyEatingInspirationSection;
