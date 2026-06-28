"use client";

import { motion } from "framer-motion";
import { forumPosts } from "@/data/forumPosts";
import ForumCard from "./ForumCard";
import SectionTitle from "./SectionTitle";

export default function LatestForum() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Latest Community Posts"
          subtitle="Community"
        />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {forumPosts.map((post) => (
            <ForumCard
              key={post.id}
              post={post}
            />
          ))}

        </motion.div>

      </div>

    </section>
  );
}