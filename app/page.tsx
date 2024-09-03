import Benefits from "./components/layout/Benefits";
import Pricing from "./components/layout/design/Pricing";
import RoadMap from "./components/layout/design/RoadMap";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/Header/header";
import Hero from "./components/layout/Hero";
import Collaboration from "./components/layout/section/Collaboration";
import Button from "./components/layout/ui/Button";
import Service from "./components/Services";

export default function Home() {
  return (
    <div className="pt-[4.5rem] lg:pt-[5.25rem] overflow-hidden">
      {/* <Button label={"Start Now"} /> */}
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Service />
      <Pricing />
      <RoadMap />
      <Footer />
    </div>
  );
}
