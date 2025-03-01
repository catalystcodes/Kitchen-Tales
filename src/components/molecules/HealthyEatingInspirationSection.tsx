import SubHeaderForSection from "../atoms/SubHeaderForSection";

interface HealthyEatingInspirationSectionProps {
  topic: string;

  img: string;
  header1: string;
  desc1: string;
  header2: string;
  desc2: string;
  header3: string;
  desc3: string;
}

const HealthyEatingInspirationSection = ({
  topic,

  header1,
  img,
  desc1,
  desc2,
  header2,
  desc3,
  header3,
}: HealthyEatingInspirationSectionProps) => {
  return (
    <div>
      <SubHeaderForSection topic={topic} viewMoreText="VIEW ALL" />
      <div className="flex items-center gap-x-[2.2rem]">
        <img src={img} alt="" />

        <div>
          <div className="border-b border-[#6F6F6F] pb-[1.3rem]">
            <p className="text-[1.5rem] font-medium">{header1}</p>

            <p className="text-[1.1rem] ">{desc1}</p>
          </div>
          <div className="border-b border-[#6F6F6F] pb-[1.3rem]">
            <p className="text-[1.5rem] font-medium pt-[1.3rem]">{header2}</p>
            <p className="text-[1.1rem] ">{desc2}</p>
          </div>
          <div className="border-b border-[#6F6F6F] pb-[1.3rem]">
            <p className="text-[1.5rem] font-medium pt-[1.3rem]">{header3}</p>
            <p className="text-[1.1rem] ">{desc3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyEatingInspirationSection;
