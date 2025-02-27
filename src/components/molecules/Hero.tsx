import AppInput from "../atoms/AppInput";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src="/coverImage2.svg"
        alt=""
        className="absolute top-0 left-0 -z-20 w-full"
      />
      <img
        src="/DarkenerCover2.svg"
        alt=""
        className="absolute top-0 left-0 -z-10 w-full"
      />
      <div>
        <p className="text-[2.2rem] text-white font-semibold text-center w-[36rem] m-auto pt-[7.5rem] mb-[2.4rem]">
          Fuel your body & soul - find recipes that taste amazing!
        </p>
        <div className="w-[50rem] m-auto">
          <AppInput placeholder="Search by dish, ingredient, ......." />
        </div>
      </div>
    </div>
  );
};

export default Hero;
