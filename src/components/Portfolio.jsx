export default function Portfolio() {
  return (
    <section className="py-20 h-screen" id="portfolio">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-5xl font-bold mb-4">Portfolio</h2>
        <div className="flex">
          <div className="w-1/2 bg-slate-100">
            left
          </div>
          <div className="basis-2/3 bg-slate-200">
          right</div>
        </div>
      </div>
    </section>
  );
}