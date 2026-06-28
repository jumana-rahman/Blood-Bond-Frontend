import FeatureCard from "./FeatureCard";
import SectionTitle from "./SectionTitle";

const features = [
  {
    icon: "dumbbell",
    title: "Modern Equipment",
    description:
      "Train with premium gym equipment designed for every fitness level.",
  },
  {
    icon: "users",
    title: "Expert Trainers",
    description:
      "Certified trainers help you achieve your personal fitness goals.",
  },
  {
    icon: "heart",
    title: "Healthy Lifestyle",
    description:
      "Improve your body, mind and overall health through fitness.",
  },
  {
    icon: "clock",
    title: "Flexible Schedule",
    description:
      "Morning, evening and weekend classes available.",
  },
  {
    icon: "medal",
    title: "Best Results",
    description:
      "Thousands of successful transformations from our members.",
  },
  {
    icon: "apple",
    title: "Nutrition Guide",
    description:
      "Professional meal plans to maximize your performance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Why Choose Us"
          title="Everything You Need To Reach Your Fitness Goals"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}