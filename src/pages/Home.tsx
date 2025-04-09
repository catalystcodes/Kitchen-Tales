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
        <HealthyEatingInspirationSection
          topic="Healthy Eating Inspiration"
          desc1="Explore a collection of mouthwatering recipes that not only
          delight your taste buds but also pack a powerful nutritional
          punch."
          desc2="Dive into the world of plant-based goodness with recipes that
          provide both energy and exceptional flavors, making each bite a
          celebration of health."
          desc3="Simplify your culinary journey with stress-free, one-pan
          wonders—recipes that prioritize convenience without compromising
          on nutritional value or taste. "
          header1="Delicious Dishes Packed with Nutrition"
          header2="Fuel Your Day with Plant-Based Power"
          header3="One-Pan Wonders for Stress-Free Cooking"
          img="/healthyEatingImage.svg "
        />
        <LiquidHarmony />
        <RecipeOfTheWeek />
      </div>
      <SetYourPreferences />
      <InternationalFlavorShowcase />
    </PageLayout>
  );
};

export default Home;
