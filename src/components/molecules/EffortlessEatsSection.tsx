import { effortlessEatsData } from "../../data";
import EffortlessEatsSectionCard from "./EffortlessEatsSectionCard";
import SubHeaderForSection from "./SubHeaderForSection";

const EffortlessEatsSection = () => {
  return (
    <div className="my-[7.1rem]">
      <SubHeaderForSection
        topic="Effortless Eats"
        viewMoreText="VIEW ALL RECIPES"
      />
      <p className="text-[1.2rem]">
        Sip, savor, and celebrate! Discover a symphony of fruit-infused
        delights, refreshing mocktails, and spirited cocktails for every
        occasion.
      </p>
      <div className="flex gap-x-[2.2rem] flex-wrap mt-[1.8rem]">
        {effortlessEatsData.map((item, index) => (
          <div>
            <EffortlessEatsSectionCard key={index} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EffortlessEatsSection;
