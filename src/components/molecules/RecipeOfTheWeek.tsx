import { RecipeOfTheWeekData } from "../../data";
import SubHeaderForSection from "../atoms/SubHeaderForSection";

interface RecipeOfTheWeekProps {
  name: string;
  producer: string;
  desc: string;
  duration: number;
}

const RecipeOfTheWeekCard = ({
  name,
  producer,
  desc,
  duration,
}: RecipeOfTheWeekProps) => {
  return (
    <div className="flex  gap-x-10">
      <img src="/RecipeoftheWeekPlayer.svg" alt="" />
      <div>
        <p className="text-[1.8rem] font-medium">{name}</p>
        <p className="mb-[0.7rem] mt-[0.2rem]">
          By <span className="text-[1.1rem] text-[#C57D5D]">{producer}</span>
        </p>
        <p className="text-[1.1rem] font-light">
          {" "}
          Total time: {duration} mins{" "}
        </p>
        <p className="text-[1.1rem] mt-[0.7rem]">{desc}</p>
      </div>
    </div>
  );
};

const RecipeOfTheWeek = () => {
  return (
    <div>
      <SubHeaderForSection topic="Recipe of the Week" />
      <div>
        {RecipeOfTheWeekData.map((recipe, index) => (
          <div>
            <RecipeOfTheWeekCard key={index} {...recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeOfTheWeek;
