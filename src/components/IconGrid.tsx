"use client";
import { Icon } from "@/types/Icon";
import React, { useEffect, useState } from "react";
import IconCard from "./IconCard";
import { useIconStore } from "@/store";

interface IconsGridProps {
  icons: Icon[];
  onSelectedIcon?: (iconId: Icon["id"]) => void;
  selectedIconId?: Icon["id"];
}

function IconGrid({ icons }: IconsGridProps) {
  const {setSelectedIcon} = useIconStore()

  return (
    <div className="mt-12 w-full flex gap-4 flex-wrap">
      {icons.map((iconProps) => {
        const { name, icon, id } = iconProps
        return (
          <IconCard
            key={name + id}
            name={name}
            icon={icon}
            onClick={(e) => {
              e.preventDefault();
              setSelectedIcon(iconProps)
            }}
          />
        );
      })}
    </div>
  );
}

export default IconGrid;
