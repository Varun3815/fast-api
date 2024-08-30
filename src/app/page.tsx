"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<{
    results: string[];
    duration: number;
  }>();
  useEffect(()=>{
    const fetchData = async()=>{
      if(!input) return setSearchResults(undefined);
      await fetch(`/api/search?q=${input}`)
    }
    fetchData();
  },[input])
  return (
    <>
      <div className="">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          type="text"
          className="text-zinc-900"
          name="country"
          placeholder="Search Country"
        />
      </div>
    </>
  );
}
