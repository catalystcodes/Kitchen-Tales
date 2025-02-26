interface SubFooterProps {
  title: string;
  subTitle1: string;
  subTitle2: string;
  subTitle3: string;
  subTitle4?: string;
  subTitle5?: string;
}

const SubFooter = ({
  title,
  subTitle1,
  subTitle2,
  subTitle3,
  subTitle4,
  subTitle5,
}: SubFooterProps) => {
  return (
    <div>
      <p className="text-[1.2rem] font-semibold mb-6">{title}</p>
      <div className="flex flex-col gap-y-2">
        <p>{subTitle1}</p>
        <p>{subTitle2}</p>
        <p>{subTitle3}</p>
        <p>{subTitle4}</p>
        <p>{subTitle5}</p>
      </div>
    </div>
  );
};

export default SubFooter;
