const categories = [
  { name: "Sales Skills", icon: "📊" },
  { name: "Sales Technology Skills", icon: "🧩" },
  { name: "Communication Skills", icon: "💬" },
  { name: "Business Acumen Skills", icon: "💡" },
];

export default function SkillCategories() {
  return (
    <section className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map(({ name, icon }) => (
        <div key={name} className="bg-soft-blue text-center py-6 rounded-sm shadow-xs">
          <div className="text-3xl mb-2">{icon}</div>
          <div className="text-navy font-semibold">{name}</div>
        </div>
      ))}
    </section>
  );
}
