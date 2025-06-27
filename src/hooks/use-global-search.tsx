/**
 * A global search hook that provides a search interface
 * and handles keyboard shortcuts to toggle the search modal.
 */
"use client";

import { GlobalSearch } from "@/components/global-search";
import { RESOURCES } from "@/data/resources";
import { useEffect, useState } from "react";

export function useGlobalSearch() {
  const results = RESOURCES; // Something that would come from an API or local search
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () =>
      document.removeEventListener("keydown", down);
  }, []);

  const resultsRender = () => (
    <GlobalSearch
      open={open}
      setOpen={setOpen}
      results={results}
    />
  );

  return {
    open,
    setOpen,
    GlobalSearch: resultsRender,
  };
}
