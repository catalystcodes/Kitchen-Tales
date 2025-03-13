import CookDetails from "../components/molecules/CookDetails";
import PageLayout from "../components/organism/PageLayout";

const CookPage = () => {
  return (
    <PageLayout showFooter={true}>
      <CookDetails />
    </PageLayout>
  );
};

export default CookPage;
