import { effortlessEatsData } from "../../data";
import EffortlessEatsSectionCard from "./EffortlessEatsSectionCard";

const EffortlessEatsSection = () => {
  return (
    <div className="my-[7.1rem]">
      <div className="flex items-center justify-between mb-[2.2rem]">
        <p className="text-[2.7rem] font-semibold "> Effortless Eats</p>
        <div className="flex gap-x-[0.6rem] items-center cursor-pointer">
          <p className="text-[1.1rem] font-light ">VIEW ALL RECIPES</p>
          <img src="/Right arrow.svg" alt="" />
        </div>
      </div>
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
