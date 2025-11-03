export default function StaticPhoto({ bg }) {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover min-h-50 sm:min-h-100"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-[#111424]/70 top-0 z-10"></div>
    </section>
  );
}
