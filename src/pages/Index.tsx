import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import LargeHero from "../components/content/LargeHero";
import FiftyFiftySection from "../components/content/FiftyFiftySection";
import OneThirdTwoThirdsSection from "../components/content/OneThirdTwoThirdsSection";
import ProductCarousel from "../components/content/ProductCarousel";
import EditorialSection from "../components/content/EditorialSection";

const AnnouncementBar = () => (
  <div className="announcement-bar w-full py-2.5 text-center text-[11px] tracking-widest uppercase font-light">
    Free UK delivery on orders over £75 &nbsp;·&nbsp; New Summer Collection now available
  </div>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <AnnouncementBar />
    <Header />
    <main className="pt-8">
      <FiftyFiftySection />
      <ProductCarousel />
      <LargeHero />
      <OneThirdTwoThirdsSection />
      <EditorialSection />
    </main>
    <Footer />
  </div>
);

export default Index;
