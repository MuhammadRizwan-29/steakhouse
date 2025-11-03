import { assets } from "../assets/assets";
import Button from "./Button";
import HeadingH1 from "./HeadingH1";

export default function HomeHero() {
  return (
    <section
      className="flex flex-col items-start justify-center relative bg-cover bg-center min-h-[calc(60vh)] lg:min-h-[calc(100vh-100px)]"
      style={{ backgroundImage: `url(${assets.home_hero})` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#00000082_0%,_#111424_95%)]"></div>

      <div className="w-full max-w-6xl mx-auto z-10 px-5">
        <div className="w-full lg:w-3/5 flex flex-col gap-5 items-start">
          <HeadingH1 content={"A Premium and Authentic Steak House"} />
          <Button link={""} title={"Make Reservation"} />
        </div>
      </div>
    </section>
  );
}
