import ReviewArea from "./ReviewArea";

const Reviews = () => {
  return (
    <div>
      <p className="mb-5 text-[2rem] font-medium text-[#1D1D1D]">
        Reviews (27)
      </p>
      <div className="flex items-center mb-10">
        <img src="/public/Rating.svg" alt="" />
        <p className="text-[1.2rem] font-medium">5.0</p>
      </div>
      <ReviewArea />
    </div>
  );
};

export default Reviews;
