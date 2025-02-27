import Footer from "../molecules/Footer";
import Navbar from "../molecules/Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col overflow-hidden w-screen h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col overflow-y-auto">
        <div className="flex-grow">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default PageLayout;
