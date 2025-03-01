import HealthyEatingInspirationSection from "../components/molecules/HealthyEatingInspirationSection";
import InternationalFlavorShowcase from "../components/molecules/InternationalFlavorShowcase";
import MoreArticles from "../components/molecules/moreArticles";
import PageLayout from "../components/organism/PageLayout";

const Articles = () => {
  return (
    <PageLayout showFooter={true}>
      <div className="px-[8.3rem]  flex flex-col gap-y-[7.1rem]">
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
      </div>

      <InternationalFlavorShowcase />
      <div className="px-[8.3rem]  flex flex-col gap-y-[7.1rem] mb-[8.9rem]">
        <HealthyEatingInspirationSection
          topic="Comfort Classics"
          desc1="Craft comforting dishes from scratch and transform your kitchen into a haven of warmth and deliciousness."
          desc2="Simplify mealtime with these heartwarming one-pot wonders. Enjoy the ease and comfort of flavorful dishes cooked in a single pot."
          desc3="Infuse a burst of contemporary flavors into beloved classics. Explore inventive recipes for a modern take on comforting traditions."
          header1="Homemade Comfort Creations to Warm Your Soul"
          header2="One-Pot Wonders: Effortless Comfort in Every Bite"
          header3="Flavorful Innovations: Modern Twists on Comfort Tradition"
          img="/healthyEatingImage2.svg"
        />
        <MoreArticles />
      </div>
    </PageLayout>
  );
};

export default Articles;
