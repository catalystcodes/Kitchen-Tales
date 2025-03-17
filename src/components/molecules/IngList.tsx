const IngList = ({ ingredients }: { ingredients: string }) => {
  return (
    <div className="flex items-center gap-x-5">
      <img src="/ingList.svg" alt="" />
      <p className="text-[#444444] text-[1.3rem]">{ingredients}</p>
    </div>
  );
};

export default IngList;
