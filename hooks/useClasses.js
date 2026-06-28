"use client";

import { useMemo } from "react";
import { classes } from "@/data/classes";
import { filterClasses } from "../utils/filterClasses";

export default function useClasses(filters) {
  return useMemo(() => {
    return filterClasses(classes, filters);
  }, [filters]);
}