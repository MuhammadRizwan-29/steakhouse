import { assets } from "../assets/assets";
import FeaturedSection from "../components/FeaturedSection";
import HomeHero from "../components/HomeHero";
import Reviews from "../components/Reviews";
import StaticPhoto from "../components/StaticPhoto";
import Story from "../components/Story";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Story />
      <FeaturedSection />
      <StaticPhoto bg={assets.home_staticbg} />
      <Reviews />
    </main>
  );
}
