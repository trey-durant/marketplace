import HeroSection from "@/components/hero";
import SkillCategories from "@/components/SkillCategories";
import FeaturedPrograms from "@/components/FeaturedPrograms";

export default async function Home() {
  return (
    <>
      <main className="p-6 max-w-7xl mx-auto">
        <HeroSection />
        <SkillCategories />
        <FeaturedPrograms />
      </main>
    </>
  );
}
