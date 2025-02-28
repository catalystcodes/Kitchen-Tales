import { BingeWorthyBitesData } from "../../data";
import SubHeaderForSection from "../atoms/SubHeaderForSection";
import EffortlessEatsSectionCard from "./EffortlessEatsSectionCard";

const BingeWorthyBites = () => {
  return (
    <div>
      <div className="pt-[2rem]"></div>
      <SubHeaderForSection
        topic="Sweet Serenity"
        viewMoreText="VIEW ALL RECIPES"
      />
      <p className="text-[1.2rem]">
        Indulge your sweet tooth in a world of delectable desserts. Explore
        heavenly cakes, exquisite pastries, and delightful treats for every
        craving.
      </p>
      <div className="flex gap-x-[2.2rem]  mt-[1.8rem]">
        {BingeWorthyBitesData.map((item, index) => (
          <div>
            <EffortlessEatsSectionCard key={index} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingeWorthyBites;
