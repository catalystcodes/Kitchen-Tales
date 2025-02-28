import BingeWorthyBites from "../components/molecules/BingeWorthyBites";
import EffortlessEatsSection from "../components/molecules/EffortlessEatsSection";
import Hero from "../components/molecules/Hero";
import LiquidHarmony from "../components/molecules/LiquidHarmony";
import MorningDelights from "../components/molecules/MorningDelights";
import RecipeOfTheWeek from "../components/molecules/RecipeOfTheWeek";
import SweetSerenity from "../components/molecules/SweetSerenity";
import PageLayout from "../components/organism/PageLayout";

const Recipes = () => {
  return (
    <PageLayout showFooter={true}>
      <Hero />
      <div className="px-[8.3rem] mt-[7.1rem] flex flex-col gap-y-[7.1rem]">
        <MorningDelights />
        <RecipeOfTheWeek />
        <LiquidHarmony />
        <EffortlessEatsSection />
        <SweetSerenity />
        <BingeWorthyBites />
      </div>
    </PageLayout>
  );
};

export default Recipes;
