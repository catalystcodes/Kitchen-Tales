import { ReviewData } from "../../data";
import ReviewArea from "./ReviewArea";
interface ReviewCardProps {
  name: string;
  desc: string;
  date: string;
}

const ReviewCard = ({ name, desc, date }: ReviewCardProps) => {
  return (
    <div className="flex gap-x-7.5 pt-12.5 pb-14 border-t-1 border-[#6F6F6F] last:border-b-1 mb-15">
      <img src="/UserProfilephoto.svg" alt="" className="w-[5rem] h-[5rem]" />
      <div>
        <p className="text-[1.3rem] mb-2.5 font-semibold">{name}</p>
        <div className="flex items-center gap-x-5 mb-6">
          <img src="/Rating.svg" alt="" />
          <p className="text-[.8rem] text-[#939393]">{date}</p>
        </div>
        <p className="text-[1.1rem] text-[#444444] mb-5">{desc}</p>
        <div className="flex items-center gap-x-2">
          <img src="/like.svg" alt="nn" />
          <p className="text-[#666666]">Helpful (0)</p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div>
      <p className="mb-5 text-[2rem] font-medium text-[#1D1D1D]">
        Reviews (27)
      </p>
      <div className="flex items-center mb-10">
        <img src="/Rating.svg" alt="" />
        <p className="text-[1.2rem] font-medium">5.0</p>
      </div>
      <ReviewArea />
      <div>
        {ReviewData.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-x-3 mb-20.5">
        <img src="/rightArrow.svg" alt="" className="rotate-90" />
        <p className="text-[#2E5834] font-medium text-[1.3rem]">
          Read More Reviews
        </p>
      </div>
    </div>
  );
};

export default Reviews;
