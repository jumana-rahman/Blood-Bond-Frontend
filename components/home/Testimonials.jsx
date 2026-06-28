import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Testimonials"
          title="What Our Members Say"
        />

        <div className="grid md:grid-cols-2 gap-8">

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}