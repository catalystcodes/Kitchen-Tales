import { CookWorkData } from "../../data";
import InstructionsCard from "./InstructionsCard";

interface InstructionStep {
  desc: string;
  img: string;
}

interface Recipe {
  id: string;
  name: string;
  image: string;
  producer: string;
  duration: number;
  rating: number;
  bigImage: string;
  instruction1?: InstructionStep[];
  instruction2?: InstructionStep[];
  instruction3?: InstructionStep[];
  instruction4?: InstructionStep[];
  instruction5?: InstructionStep[];
  instruction6?: InstructionStep[];
  instruction7?: InstructionStep[];
  instruction8?: InstructionStep[];
}

const getRecipeInstructions = (id: string): React.ReactNode => {
  // Find the recipe with the matching ID
  const recipe: Recipe | undefined = CookWorkData.find(
    (item: Recipe) => item.id === id
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  // Check if recipe has instructions
  const hasInstructions: boolean = !!(
    recipe.instruction1 ||
    recipe.instruction2 ||
    recipe.instruction3 ||
    recipe.instruction4 ||
    recipe.instruction5 ||
    recipe.instruction6 ||
    recipe.instruction7 ||
    recipe.instruction8
  );

  if (!hasInstructions) {
    return <p>No instructions available for {recipe.name}</p>;
  }

  // Collect all available instruction steps
  return (
    <div className="">
      {/* <h2>Instructions for {recipe.name}</h2> */}
      {recipe.instruction1?.map((step: InstructionStep, index: number) => (
        <InstructionsCard {...step} key={index} />
      ))}
      {recipe.instruction2?.map((step: InstructionStep, index: number) => (
        <InstructionsCard {...step} key={index} />
      ))}
      {recipe.instruction3?.map((step: InstructionStep, index: number) => (
        <InstructionsCard {...step} key={index} />
      ))}
      {recipe.instruction4?.map((step: InstructionStep, index: number) => (
        <InstructionsCard {...step} key={index} />
      ))}
      {recipe.instruction5?.map((step: InstructionStep, index: number) => (
        <InstructionsCard {...step} key={index} />
      ))}
      {recipe.instruction6?.map((step: InstructionStep, index: number) => (
        <InstructionsCard {...step} key={index} />
      ))}
      {recipe.instruction7?.map((step: InstructionStep, index: number) => (
        <InstructionsCard {...step} key={index} />
      ))}
      {recipe.instruction8?.map((step: InstructionStep, index: number) => (
        <InstructionsCard {...step} key={index} />
      ))}
    </div>
  );
};

interface RecipeInstructionsProps {
  recipeId: string;
}

const RecipeInstructions: React.FC<RecipeInstructionsProps> = ({
  recipeId,
}) => {
  return <div className="">{getRecipeInstructions(recipeId)}</div>;
};

export default RecipeInstructions;
