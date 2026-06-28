"use client";

import { motion } from "framer-motion";
import { gallery } from "@/data/gallery";
import GalleryCard from "./GalleryCard";
import SectionTitle from "./SectionTitle";

export default function TransformationSection() {
  return (
    <section className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Transformation"
          title="Real People. Real Results."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {gallery.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}

        </motion.div>

      </div>

    </section>
  );
}