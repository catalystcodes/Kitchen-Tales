import { MoreArticlesData } from "../../data";
import SubHeaderForSection from "../atoms/SubHeaderForSection";
import { InternationalFlavorShowcaseCard } from "./InternationalFlavorShowcase";

const MoreArticles = () => {
  return (
    <div>
      <SubHeaderForSection topic="More Articles" />
      <div className="flex flex-wrap justify-center gap-x-[2.8rem] gap-y-[2.8rem]">
        {MoreArticlesData.map((article, index) => (
          <div className="w-[23.2rem]">
            {" "}
            <InternationalFlavorShowcaseCard key={index} {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreArticles;
