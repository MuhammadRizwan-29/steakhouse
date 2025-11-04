import HeadingH1 from "./HeadingH1";

export default function GeneralHero({ bgImg, title }) {
  return (
    <section
      className="flex flex-col items-start justify-center relative bg-cover bg-center min-h-[60vh] bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#00000082_0%,_#111424_95%)]"></div>

      <div className="w-full max-w-6xl mx-auto z-10 px-5">
        <div className="flex flex-col items-center">
          <HeadingH1 content={title} />
        </div>
      </div>
    </section>
  );
}
