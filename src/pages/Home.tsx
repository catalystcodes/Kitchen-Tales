import AppInput from "../components/atoms/AppInput";
import EffortlessEatsSection from "../components/molecules/EffortlessEatsSection";

const Home = () => {
  return (
    <div>
      <div className="bg-red-400 h-[30.6rem] w-full">
        <p className="text-[2.2rem] text-white font-semibold text-center w-[36rem] m-auto pt-[7.5rem] mb-[4.4rem]">
          Fuel your body & soul - find recipes that taste amazing!
        </p>
        <div className="w-[50rem] m-auto">
          <AppInput placeholder="Search by dish, ingredient, ......." />
        </div>
      </div>
      <div className="px-[8.3rem]">
        <EffortlessEatsSection />
      </div>
    </div>
  );
};

export default Home;
