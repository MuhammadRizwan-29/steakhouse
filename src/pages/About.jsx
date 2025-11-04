import { assets } from "../assets/assets";
import GeneralHero from "../components/GeneralHero";
import History from "../components/History";
import Reviews from "../components/Reviews";
import StaticPhoto from "../components/StaticPhoto";

export default function About() {
  return (
    <main>
      <GeneralHero bgImg={assets.about_bg} title={"Who Are We"} />
      <History />
      <StaticPhoto bg={assets.about_static} />
      <Reviews />
    </main>
  );
}
