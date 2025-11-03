import { assets } from "../assets/assets";
import Button from "./Button";
import HeadingH2 from "./HeadingH2";

export default function FeaturedSection() {
  return (
    <section className="bg-[#232533] py-10">
      <div className="w-full max-w-6xl mx-auto px-5 flex items-start flex-col sm:flex-row sm:gap-7.5 lg:gap-0">
        <div className="w-full sm:w-1/2 lg:pr-20 pb-10 flex flex-col gap-5 sm:gap-20">
          <HeadingH2 content={"Our Featured Delicacies"} />
          <div className="flex flex-col gap-5 sm:text-right sm:ml-12.5">
            <img src={assets.bbq_sauce} alt="BBQ Sauce" />
            <h3 className="text-2xl sm:text-3xl tracking-normal leading-tight text-orange-light font-yeseva">
              Wood Fire Charred Steak with BBQ Sauce
            </h3>
          </div>
          <div className="flex flex-col gap-5 sm:text-right sm:ml-12.5">
            <img src={assets.seasoned_potatao} alt="BBQ Sauce" />
            <h3 className="text-2xl sm:text-3xl tracking-normal leading-tight text-orange-light font-yeseva">
              Roasted Lamb with Seasoned Potatoes
            </h3>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:pl-20 pb-10 flex flex-col gap-10 sm:gap-20 items-start">
          <div className="flex flex-col gap-5 sm:mr-12.5">
            <img src={assets.roasted_beef} alt="Beef with tossed vegetables" />
            <h3 className="text-2xl sm:text-3xl tracking-normal leading-tight text-orange-light font-yeseva">
              Oven-roasted Beef with tossed vegetables
            </h3>
          </div>
          <div className="flex flex-col gap-5 sm:mr-12.5">
            <img src={assets.bbq_ribs} alt="BBQ Ribs" />
            <h3 className="text-2xl sm:text-3xl tracking-normal leading-tight text-orange-light font-yeseva">
              BBQ Ribs with Vegies and French Fries
            </h3>
          </div>
          <Button link={"/"} title={"Make Reservation"} />
        </div>
      </div>
    </section>
  );
}
