import AppInput from "../components/atoms/AppInput";
import EffortlessEatsSection from "../components/molecules/EffortlessEatsSection";
import HealthyEatingInspirationSection from "../components/molecules/HealthyEatingInspirationSection";
import Hero from "../components/molecules/Hero";
import InternationalFlavorShowcase from "../components/molecules/InternationalFlavorShowcase";
import LiquidHarmony from "../components/molecules/LiquidHarmony";
import RecipeOfTheWeek from "../components/molecules/RecipeOfTheWeek";
import SetYourPreferences from "../components/molecules/SetYourPreferences";
import PageLayout from "../components/organism/PageLayout";

const Home = () => {
  return (
    <PageLayout showFooter={false}>
      <Hero />
      <div className="px-[8.3rem] my-[7.1rem] flex flex-col gap-y-[7.1rem]">
        <EffortlessEatsSection />
        <HealthyEatingInspirationSection />
        <LiquidHarmony />
        <RecipeOfTheWeek />
      </div>
      <SetYourPreferences />
      <InternationalFlavorShowcase />
    </PageLayout>
  );
};

export default Home;
