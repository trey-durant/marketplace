const programs = [
  {
    title: "Advanced Negotiation Techniques",
    provider: "Peak Sales Coaching",
    img: "/images/program1.jpg",
  },
  {
    title: "Strategic Account Management",
    provider: "Growth Solutions Group",
    img: "/images/program2.jpg",
  },
  {
    title: "Effective Sales Presentations",
    provider: "Generate Professional Development",
    img: "/images/program3.jpg",
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-navy mb-6">Featured Programs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div key={program.title} className="bg-white shadow-sm p-4 rounded-sm">
            <img src={program.img} alt={program.title} className="rounded mb-4 h-40 w-full object-cover" />
            <span className="bg-cobalt text-white px-2 py-1 text-sm rounded-sm">ENDORSED SALES TRAINING</span>
            <h3 className="mt-2 text-navy font-semibold">{program.title}</h3>
            <p className="text-sm text-gray-600">{program.provider}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
