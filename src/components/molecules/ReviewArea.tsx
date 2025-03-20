const ReviewArea = () => {
  return (
    <div className="bg-[#F5F5F5] p-7.5 mb-13">
      <div className="flex items-start gap-x-12.5 ">
        <img src="/UserProfilephoto.svg" alt="" />
        <div>
          <p className="text-[1.4rem] font-medium mb-2.5">
            Your Rating:{" "}
            <span className="font-normal text-[0.8rem] text-[#939393]">
              (required)
            </span>
          </p>
          <img src="/Rating.svg" alt="" className="opacity-30" />
          <label>
            <p className="text-[1.4rem] font-medium  mt-10 mb-3.5">
              Your Rating:{" "}
              <span className="font-normal text-[0.8rem] text-[#939393]">
                (optional)
              </span>
            </p>
            <textarea
              name="review"
              placeholder="Share your love! Tell us what you thought about the recipe in a quick review."
              className="border-1 border-[#6F6F6F] w-[52.6rem] h-[8.4rem] pl-6 bg-white pt-6 outline-none"
            />
          </label>
        </div>
      </div>

      <div className="flex justify-end mt-10">
        <button className="py-2.5 px-7.5 flex items-center rounded-full text-white bg-[#2E5834] text-[1.3rem] font-medium ">
          Post Review
        </button>
      </div>
    </div>
  );
};

export default ReviewArea;
