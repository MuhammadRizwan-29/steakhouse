import { assets } from "../assets/assets";
import HeadingH2 from "./HeadingH2";

export default function Reviews() {
  return (
    <section className="bg-[#232533] py-10">
      <div className="w-full max-w-6xl mx-auto px-5 flex items-start flex-col sm:flex-row sm:gap-10 lg:gap-0">
        <div className="w-full sm:w-1/2 lg:pr-20 pb-10 flex flex-col gap-10 lg:gap-20">
          <HeadingH2 content={"Loved by Many"} />
          <div className="flex flex-col gap-5">
            <p className="text-white font-varela">
              Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue
              cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar
              ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu
              aliquet egestas id diam.
            </p>
            <div className="flex items-center gap-5">
              <img
                src={assets.jessica}
                alt="Jessica Sommer"
                className="w-15 h-15 rounded-full object-cover"
              />
              <h4 className="text-white font-yeseva text-xl">Jessica Sommer</h4>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:pl-20 pb-10 flex flex-col gap-10 lg:gap-20">
          <div className="flex flex-col gap-5">
            <p className="text-white font-varela">
              Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue
              cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar
              ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu
              aliquet egestas id diam.
            </p>
            <div className="flex items-center gap-5">
              <img
                src={assets.bryan}
                alt="Bryan Lambert"
                className="w-15 h-15 rounded-full object-cover"
              />
              <h4 className="text-white font-yeseva text-xl">Bryan Lambert</h4>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white font-varela">
              Diam, urna, ornare leo facilisis suspendisse eu rutrum id augue
              cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar
              ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu
              aliquet egestas id diam.
            </p>
            <div className="flex items-center gap-5">
              <img
                src={assets.kristin}
                alt="Kristin Foster"
                className="w-15 h-15 rounded-full object-cover"
              />
              <h4 className="text-white font-yeseva text-xl">Kristin Foster</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
