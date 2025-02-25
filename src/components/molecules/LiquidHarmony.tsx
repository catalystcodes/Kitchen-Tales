import { LiquidHarmonyData } from "../../data";
import EffortlessEatsSectionCard from "./EffortlessEatsSectionCard";
import SubHeaderForSection from "../atoms/SubHeaderForSection";

const LiquidHarmony = () => {
  return (
    <div>
      <SubHeaderForSection
        topic="Liquid Harmony"
        viewMoreText="VIEW ALL RECIPES"
      />
      <p>
        Sip, savor, and celebrate! Discover a symphony of fruit-infused
        delights, refreshing mocktails, and spirited cocktails for every
        occasion.
      </p>
      <div className="flex gap-x-[2.2rem] gap-y-[2.2rem] flex-wrap- mt-[1.8rem]">
        {LiquidHarmonyData.map((item, index) => (
          <div>
            <EffortlessEatsSectionCard key={index} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiquidHarmony;
