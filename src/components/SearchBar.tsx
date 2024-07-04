"use client"
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");
    const router = useRouter()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setSearch(value)
    router.push(`/?search=${value}`)
  }

  return (
    <div>
      <input
        className="bg-slate-50 w-full rounded-xl px-8 py-4"
        type="text"
        placeholder="Rechercher"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
