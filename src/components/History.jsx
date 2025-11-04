import { assets } from "../assets/assets";

export default function History() {
  return (
    <section className="bg-[#232533] py-10">
      <div className="w-full max-w-6xl mx-auto px-5">
        <div className="flex flex-col gap-10 lg:gap-25 sm:my-10">
          <h3 className="text-2xl sm:text-3xl tracking-normal leading-tight text-white text-center font-yeseva">
            Winners of international cooking competitions, James and Steve are
            the co-founders and head chefs at Steak House. We are experienced
            and passionate chefs wanting to serve you the best delicacies that
            will satisfy your taste buds.
          </h3>
          <img src={assets.about_img} alt="Dinning Views" />
        </div>
        <h3 className="text-2xl sm:text-4xl tracking-normal leading-tight text-orange-light font-yeseva my-5 sm:my-0">
          Our Delicious Story
        </h3>
        <div className="flex flex-col items-end gap-5 sm:gap-0 sm:mt-5">
          <div className="md:w-7/12 flex flex-col gap-5">
            <h3 className="text-left text-2xl sm:text-3xl tracking-normal leading-tight text-orange-light font-yeseva">
              Most loved steak house since 1985
            </h3>
            <p className="font-varela text-white">
              Our steak story dates back to 1985 when James, a steak lover
              himself, had the urge of serving the most delicious recipes for
              foodies like him. It was then that he met Steve, a passionate chef
              who shared similar interests.
            </p>
            <p className="font-varela text-white">
              They started a small food let that offered takeaways only. Seeing
              the love the city had for steak, they expanded their team with 8
              more chefs from different parts of the country so we could serve
              more variety on the table.
            </p>
            <p className="font-varela text-white">
              Ever since, we’ve been known as the best Steak house in town
              serving over 1000 customers everyday. Humbled by the love we’ve
              received, we strive to continue giving you the best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
