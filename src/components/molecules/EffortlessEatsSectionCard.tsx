interface EffortlessEatsSectionCardProps {
  name: string;
  image: string;
  producer: string;
  duration: number;
  rating: number;
}

const EffortlessEatsSectionCard = ({
  name,
  image,
  producer,
  duration,
  rating,
}: EffortlessEatsSectionCardProps) => {
  return (
    <div>
      <div className="relative mb-2.5">
        <img src={image} alt="" />
        <img src="/favIcon.svg" alt="" className="absolute right-3.5 top-3.5" />
      </div>
      <p className="text-[1.6rem] w-[20.8rem] font-medium">{name}</p>
      <p className="my-1">
        By <span className="text-[#C57D5D] text-[1.1rem] ">{producer}</span>
      </p>
      <p className="font-light">Total time: {duration} mins </p>
      <span className="flex gap-x-[0.5rem]">
        <img src="/Rating.svg" alt="" />{" "}
        <p className="font-light">({rating})</p>
      </span>
    </div>
  );
};

export default EffortlessEatsSectionCard;
