const SubHeaderForSection = ({
  topic,
  viewMoreText,
}: {
  topic: string;
  viewMoreText: string;
}) => {
  return (
    <div className="flex items-center justify-between mb-[2.2rem]">
      <p className="text-[2.7rem] font-semibold "> {topic} </p>
      <div className="flex gap-x-[0.6rem] items-center cursor-pointer">
        <p className="text-[1.1rem] font-light ">{viewMoreText}</p>
        <img src="/Right arrow.svg" alt="" />
      </div>
    </div>
  );
};

export default SubHeaderForSection;
