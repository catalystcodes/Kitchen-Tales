import { MorningDelightsData } from "../../data";
import SubHeaderForSection from "../atoms/SubHeaderForSection";
import EffortlessEatsSectionCard from "./EffortlessEatsSectionCard";

const MorningDelights = () => {
  return (
    <div>
      <SubHeaderForSection
        topic="Morning Delights"
        viewMoreText="VIEW ALL RECIPES"
      />
      <p className="text-[1.2rem]">
        Start your day right! Explore a delightful assortment of breakfast
        wonders, from hearty classics to energizing bites that make each morning
        a delicious celebration.
      </p>
      <div className="flex gap-x-[2.2rem]  mt-[1.8rem]">
        {MorningDelightsData.map((item, index) => (
          <div>
            <EffortlessEatsSectionCard key={index} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MorningDelights;
