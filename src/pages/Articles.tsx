import HealthyEatingInspirationSection from "../components/molecules/HealthyEatingInspirationSection";
import InternationalFlavorShowcase from "../components/molecules/InternationalFlavorShowcase";
import PageLayout from "../components/organism/PageLayout";

const Articles = () => {
  return (
    <PageLayout showFooter={true}>
      <div className="px-[8.3rem]  flex flex-col gap-y-[7.1rem]">
        <HealthyEatingInspirationSection />
      </div>
      <InternationalFlavorShowcase />
    </PageLayout>
  );
};

export default Articles;
