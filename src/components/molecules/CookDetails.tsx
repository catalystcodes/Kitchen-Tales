import MoreAboutCook from "./MoreAboutCook";

const CookDetails = () => {
  return (
    <div>
      <div className="flex items-start gap-x-12 mt-16 pl-[7.8rem]">
        <img src="/BackButton.svg" alt="" className="mr-12" />
        <img src="/cookImage.svg" alt="cook" />
        <div>
          <p className="text-[2.9rem] font-semibold">Judy Leung</p>
          <div className="flex items-center mt-2 mb-3">
            <img src="/LocationIcon.svg" alt="" />
            <p className="text-[1.3rem] ml-2">New Jersey, USA</p>
          </div>
          <div className="flex items-center gap-x-2.5">
            <img src="/fbShare.svg" alt="" />
            <img src="/pintrestShare.svg" alt="" />
            <img src="/InstaShare.svg" alt="" />
            <img src="/WorldShare.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="mt-[4rem] px-[16.7rem]">
        <p className="text-[1.2rem] text-[#444444] mb-8">
          Judy is the mom of The Woks of Life family. (The Woks of Life is a
          blog where Judy and her family of 4, share recipes & travels with each
          other and the world). Born in Shanghai, she arrived in the U.S. at age
          16. Fluent in both English and three separate Chinese dialects, she's
          our professional menu translator when we're eating our way through
          China. Dedicated to preserving disappearing recipes and traditions,
          her specialty is all things traditional, from mooncakes to home-style
          stir-fries.
        </p>
        <p className="text-[1.2rem] text-[#444444] mb-20">
          Judy lives with her family in New Jersey, where they cook, write, and
          photograph recipes together—and continue their eternal debate over
          what’s for dinner.
        </p>
      </div>
      <div className="px-[16.7rem]">
        <MoreAboutCook />
      </div>
    </div>
  );
};

export default CookDetails;
