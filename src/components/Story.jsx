import HeadingH2 from "./HeadingH2";
import { assets } from "./../assets/assets";
import Button from "./Button";

export default function Story() {
  return (
    <section className="bg-[#232533] py-10">
      <div className="w-full max-w-6xl mx-auto px-5 flex items-center flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 sm:pl-5 lg:pr-[100px] pb-10 flex flex-col gap-10">
          <div className="text-left lg:ml-[100px]">
            <HeadingH2 content={"Welcome to Steak by the Bay"} />
          </div>
          <img
            src={assets.story}
            alt="Story"
            className="shadow-[-10px_10px_0_#efa765] sm:shadow-[-25px_25px_0_#efa765] max-w-[95%] mx-auto sm:w-full"
          />
        </div>
        <div className="w-full sm:w-1/2 sm:pr-5 sm:pl-[100px] flex flex-col items-start gap-10 sm:gap-15">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl sm:text-4xl tracking-normal leading-tight text-orange-light font-yeseva">
              Our Delicious Story
            </h3>
            <p className="text-white font-varela">
              Our journey started in 1985 when James, a steak lover, explored
              various recipes from across the world and brought them together in
              our menu. Ever since we are now a team of 10 expert chefs from 3
              top cities in India serving you the best steaks, desserts and
              mocktails in town.
            </p>
          </div>
          <Button title="Book a table" link={"/"} />
        </div>
      </div>
    </section>
  );
}
