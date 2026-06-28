import { featuredClasses } from "@/data/classes";
import ClassCard from "./ClassCard";
import SectionTitle from "./SectionTitle";

export default function FeaturedClasses() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Featured Classes"
          subtitle="Top Classes"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {featuredClasses.map((item) => (
            <ClassCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}