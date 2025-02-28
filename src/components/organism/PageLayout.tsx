import Footer from "../molecules/Footer";
import Navbar from "../molecules/Navbar";

const PageLayout = ({
  children,
  showFooter,
}: {
  children: React.ReactNode;
  showFooter: boolean;
}) => {
  return (
    <div className="flex flex-col overflow-hidden w-screen h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col overflow-y-auto">
        <div className="flex-grow">{children}</div>
        {showFooter && <Footer />}
      </main>
    </div>
  );
};

export default PageLayout;
