import AppInput from "../components/atoms/AppInput";
import EffortlessEatsSection from "../components/molecules/EffortlessEatsSection";
import HealthyEatingInspirationSection from "../components/molecules/HealthyEatingInspirationSection";
import Hero from "../components/molecules/Hero";
import InternationalFlavorShowcase from "../components/molecules/InternationalFlavorShowcase";
import LiquidHarmony from "../components/molecules/LiquidHarmony";
import RecipeOfTheWeek from "../components/molecules/RecipeOfTheWeek";
import SetYourPreferences from "../components/molecules/SetYourPreferences";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="px-[8.3rem]">
        <EffortlessEatsSection />
        <HealthyEatingInspirationSection />
        <LiquidHarmony />
        <RecipeOfTheWeek />
      </div>
      <SetYourPreferences />
      <InternationalFlavorShowcase />
    </div>
  );
};

export default Home;
