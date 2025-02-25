import SubHeaderForSection from "../atoms/SubHeaderForSection";

const SetYourPreferences = () => {
  return (
    <div className="mb-[7.1rem]">
      <div className="px-[8.3rem] mb-8">
        <SubHeaderForSection topic="Set Your Preferences" />
        <p className="text-[1.2rem]">
          Craft your personalized experience! Set your preferences to tailor
          content, ensuring a delightful journey that matches your unique tastes
          and culinary desires.
        </p>
      </div>

      <div className="relative">
        <img
          src="/coverImage1.svg"
          alt=""
          className="absolute top-0 left-0 -z-20 w-full
		"
        />
        <img
          src="/DarkenerCover1.svg"
          alt=""
          className="absolute top-0 left-0 -z-10 w-full"
        />
        <div>
          <div className="flex justify-center py-[3rem]">
            <img src="/Progress bar.svg" alt="" />
          </div>
          <p className="text-white text-center text-[2rem] mb-[2.6rem] font-medium">
            What are your favorite cuisines?
          </p>
          <div className="flex items-center justify-center gap-x-8 mb-[3.3rem]">
            <img
              src="/Cuisine option1.svg"
              alt=""
              className="h-[7.9rem] w-[7.8rem]"
            />
            <img
              src="/Cuisine option2.svg"
              alt=""
              className="h-[7.9rem] w-[7.8rem]"
            />
            <img
              src="/Cuisine option3.svg"
              alt=""
              className="h-[7.9rem] w-[7.8rem]"
            />
            <img
              src="/Cuisine option4.svg"
              alt=""
              className="h-[7.9rem] w-[7.8rem]"
            />
            <img
              src="/Cuisine option5.svg"
              alt=""
              className="h-[7.9rem] w-[7.8rem]"
            />
            <img
              src="/Cuisine option6.svg"
              alt=""
              className="h-[7.9rem] w-[7.8rem]"
            />
            <img
              src="/Cuisine option7.svg"
              alt=""
              className="h-[7.9rem] w-[7.8rem]"
            />
            <img
              src="/Cuisine option8.svg"
              alt=""
              className="h-[7.9rem] w-[7.8rem]"
            />
            <img
              src="/Cuisine option9.svg"
              alt=""
              className="h-[7.9rem] w-[7.8rem]"
            />
          </div>
          <div className="w-[7.4rem] m-auto cursor-pointer">
            <p className="py-2.5 px-10 bg-white rounded-[3.3rem]">Next</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetYourPreferences;
