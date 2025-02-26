import { InternationalFlavorShowcaseData } from "../../data";
import SubHeaderForSection from "../atoms/SubHeaderForSection";

interface InternationalFlavorShowcaseProps {
  image: string;
  name: string;
  title: string;
  desc: string;
}

const InternationalFlavorShowcaseCard = ({
  image,
  name,
  title,
  desc,
}: InternationalFlavorShowcaseProps) => {
  return (
    <div>
      <img src={image} alt="" />
      <p className="text-[1.1rem] font-medium mt-3.5">{name}</p>
      <p className="text-[1.6rem] font-medium my-2">{title}</p>
      <p className="text-[1.1rem]">{desc}</p>
    </div>
  );
};

const InternationalFlavorShowcase = () => {
  return (
    <div className="px-[8.3rem] mb-[7.1rem]">
      <SubHeaderForSection
        topic="International Flavor Showcase"
        viewMoreText="VIEW ALL"
      />
      <div className="flex gap-x-12 items-center">
        {InternationalFlavorShowcaseData.map((data, index) => (
          <div>
            <InternationalFlavorShowcaseCard key={index} {...data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalFlavorShowcase;
