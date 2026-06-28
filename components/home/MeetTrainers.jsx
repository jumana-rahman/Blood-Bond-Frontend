"use client";

import { motion } from "framer-motion";
import { trainers } from "@/data/trainers";
import TrainerCard from "./TrainerCard";
import SectionTitle from "./SectionTitle";

export default function MeetTrainers() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Professional Team"
          title="Meet Our Expert Trainers"
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
            />
          ))}

        </motion.div>

      </div>

    </section>
  );
}