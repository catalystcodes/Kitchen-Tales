import { CookWorkData } from "../../data";
import EffortlessEatsSectionCard from "./EffortlessEatsSectionCard";

const MoreAboutCook = () => {
  return (
    <div>
      <p className="text-[1.8rem] mb-8">More from Judy Leung</p>
      <div className="flex gap-x-[2.2rem] flex-wrap mt-[1.8rem]">
        {CookWorkData.map((item, index) => (
          <div>
            <EffortlessEatsSectionCard key={index} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreAboutCook;
