const TagCard = ({ tagName }: { tagName: string }) => {
  return (
    <div className="border-1 border-[#6F6F6F] rounded-[3.3rem] py-2 px-8">
      <p className="text-[1.2rem] text-[#1D1D1D]">{tagName}</p>
    </div>
  );
};

const Tags = () => {
  return (
    <div className="mb-20">
      <p className="mb-8 text-[2rem] font-medium text-[#1D1D1D]">Tags</p>
      <div className="flex items-center gap-3.5 flex-wrap">
        <TagCard tagName="Kung Pao Chicken" />
        <TagCard tagName="Chinese Cuisine" />
        <TagCard tagName="Spicy Chicken" />
        <TagCard tagName="Sichuan Chicken" />
        <TagCard tagName="Stir-Fry" />
        <TagCard tagName="Takeout-Inspired" />
        <TagCard tagName="Asian Flavors" />
      </div>
    </div>
  );
};

export default Tags;
