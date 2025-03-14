import { useParams } from "react-router";
import { CookWorkData } from "../data";
import PageLayout from "../components/organism/PageLayout";
import NavigationIndicator from "../components/molecules/NavigationIndicator";

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
        <p>{product.name}</p>
      </div>
    </PageLayout>
  );
};

export default RecipeDetails;
