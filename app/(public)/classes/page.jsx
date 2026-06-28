"use client";

import { useState } from "react";

import ClassesHero from "@/components/classes/ClassesHero";
import SearchBar from "@/components/classes/SearchBar";
import FilterSidebar from "@/components/classes/FilterSidebar";
import SortBar from "@/components/classes/SortBar";
import ViewToggle from "@/components/classes/ViewToggle";
import ClassGrid from "@/components/classes/ClassGrid";
import Pagination from "@/components/classes/Pagination";

import useDebounce from "@/hooks/useDebounce";
import useClasses from "@/hooks/useClasses";

export default function ClassesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [sort, setSort] = useState("");
  const [view, setView] = useState("grid");

  const debouncedSearch = useDebounce(search);

  const filteredClasses = useClasses({
    search: debouncedSearch,
    category,
    difficulty,
    sort,
  });

  return (
    <>
      <ClassesHero />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <div className="flex justify-between items-center mt-6">
            <p className="font-medium">
              {filteredClasses.length} Classes Found
            </p>

            <ViewToggle
              view={view}
              setView={setView}
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-10 mt-10">

            <FilterSidebar
  category={category}
  setCategory={setCategory}
  difficulty={difficulty}
  setDifficulty={setDifficulty}
/>

            <div className="lg:col-span-3">

              <SortBar
  sort={sort}
  setSort={setSort}
/>

              <div className="mt-8">

                <ClassGrid
                  classes={filteredClasses}
                  view={view}
                />

              </div>

              <Pagination />

            </div>

          </div>

        </div>
      </section>
    </>
  );
}