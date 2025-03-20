import { useParams } from "react-router";
import { CookWorkData } from "../data";
import PageLayout from "../components/organism/PageLayout";
import NavigationIndicator from "../components/molecules/NavigationIndicator";
import OverView from "../components/molecules/OverView";
import CookTips from "../components/molecules/CookTips";
import Ingredients from "../components/molecules/Ingredients";
import AddToChart from "../components/molecules/AddToChart";
import Substitutions from "../components/molecules/Substitutions";
import RecipeVideo from "../components/molecules/RecipeVideo";
import RecipeInstructions from "../components/molecules/RecipeInstructions";
import NutritionalInfo from "../components/molecules/NutritionalInfo";
import PrivateNote from "../components/molecules/PrivateNote";
import Tags from "../components/molecules/Tags";

const RecipeDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = CookWorkData.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <PageLayout showFooter={true}>
      <div className="px-[13.9rem]">
        <NavigationIndicator />
        <p className="text-[2.9rem] font-semibold mt-8 mb-2.5">
          {product.name}
        </p>
        <div className="flex items-center gap-x-2">
          <img src="/Rating.svg" alt="" />
          <p>
            {product.rating} <span>(27)</span>
          </p>
        </div>
        <div className="flex items-center gap-x-3.5 mt-5 mb-10">
          <p className="font-light text-[#1D1D1D]">
            By{" "}
            <span className="text-[#C57D5D] font-normal">
              {product.producer}
            </span>
          </p>
          <p className="font-light text-[#D9D9D9]">|</p>
          <p className="font-light text-[#1D1D1D]">January 10, 2024</p>
        </div>
        <img src={product.bigImage} alt="" className="mb-10" />
        <div className="flex items-center justify-between">
          <img src="/Save+Rate+Print buttons.svg" alt="" />
          <img src="/Share buttons.svg" alt="" />
        </div>
        <OverView />
        <CookTips />
        <Ingredients />
        <AddToChart />
        <Substitutions />
        <RecipeVideo />
        <RecipeInstructions recipeId={product.id} />
        <div className="flex justify-between items-start">
          <NutritionalInfo />
          <img src="/Divider (1).svg" alt="" />
          <PrivateNote />
        </div>
        <Tags />
      </div>
    </PageLayout>
  );
};

export default RecipeDetails;
