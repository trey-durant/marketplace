export default function HeroSection() {
  return (
    <section className="bg-[#E8F6FE] p-6 rounded-lg text-[#00182E] flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">
          Discover Qualified Training Providers
        </h1>
        <p className="mb-4">
          Address organizational skill gaps with trusted, certified training
          partners—curated by the ISP.
        </p>
        <button className="bg-[#0B97FF] text-white px-5 py-2 rounded hover:bg-[#00182E] transition">
          Browse Marketplace
        </button>
      </div>
      <img
        src="/images/hero-person.jpg"
        alt="Professional woman"
        className="rounded-full w-48 h-48 object-cover"
      />
    </section>
  );
}
