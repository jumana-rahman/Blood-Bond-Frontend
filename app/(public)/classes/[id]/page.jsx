import ClassHero from "@/components/classes/classDetails/ClassHero";
import ClassOverview from "@/components/classes/classDetails/ClassOverview";
import TrainerCard from "@/components/classes/classDetails/TrainerCard";
import ScheduleCard from "@/components/classes/classDetails/ScheduleCard";
import Requirements from "@/components/classes/classDetails/Requirements";
import Reviews from "@/components/classes/classDetails/Reviews";
import RelatedClasses from "@/components/classes/classDetails/RelatedClasses";
import EnrollCard from "@/components/classes/classDetails/EnrollCard";

export default function ClassDetailsPage() {
  return (
    <>
      <ClassHero />

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-10">

            <ClassOverview />

            <Requirements />

            <Reviews />

            <RelatedClasses />

          </div>

          <div className="space-y-8">

            <EnrollCard />

            <TrainerCard />

            <ScheduleCard />

          </div>

        </div>

      </section>
    </>
  );
}