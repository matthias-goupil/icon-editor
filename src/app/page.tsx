"use client";
import IconCard from "@/components/IconCard";
import IconGrid from "@/components/IconGrid";
import { useState } from "react";
import iconsData from "@/mocks/icons";
import IconConfiguration from "@/components/IconConfiguration";

export default function Home() {
  const [icons, setIcons] = useState(iconsData);
  return (
    <main className="h-screen mt-12 pb-12 flex gap-12">
      <div className="rounded-xl  bg-white w-full p-12 relative">
        <div className="flex gap-12">
          <input
            className="bg-slate-100 w-full rounded-xl px-8 py-4"
            type="text"
            placeholder="Rechercher"
            onChange={(e) => {
              const search = e.target.value;
              if (search != "") {
                setIcons(
                  iconsData.filter(({ name }) => {
                    return name.includes(search);
                  })
                );
              } else {
                setIcons(iconsData);
              }
            }}
          />
          <select className="bg-slate-100 w-60 rounded-xl px-8 py-4">
            <option>Test</option>
          </select>
        </div>
        <IconGrid icons={icons} />
        <IconConfiguration />
      </div>
    </main>
  );
}
