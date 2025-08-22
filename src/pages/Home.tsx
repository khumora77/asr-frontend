import StatsBanner from "@/components/Banner";
import AsosiyOyna from "./AsosiyOyna";
import AboutSection from "@/components/About";
import SomsaVideoSection from "@/components/SomsaVideoSection";
import ImageSliderSection from "@/components/Slider";
import RightSideSlider from "@/components/RigthSlider";
import Banner2 from "@/components/Banner2";
import Menyu from "@/components/Menyu";

function Home() {
  return (
    <div>
      <AsosiyOyna />
      <StatsBanner />
      <SomsaVideoSection />
      <RightSideSlider />
      <Banner2 />
      <AboutSection />
      <Menyu />
      <ImageSliderSection />
    </div>
  );
}

export default Home;
