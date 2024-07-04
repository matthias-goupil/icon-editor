import cn from "classnames";
import Link from "next/link";
import React, { SyntheticEvent } from "react";
import SVG from "react-inlinesvg";

interface IconCardProps {
  name: string;
  icon: string;
  selected?: boolean
  onClick?: (e: SyntheticEvent) => void;
}

function IconCard({ name, icon, selected, onClick }: IconCardProps) {

  return (
    <Link href={`/icons/${name}`} onClick={onClick}>
      <div
        onClick={onClick}
        className={cn(selected && "border border-spacing-4","flex flex-col justify-center items-center gap-4 bg-white w-32 h-32 rounded-xl cursor-pointer transition duration-300 ease-in-out transform hover:bg-orange-100 ")}
        title={name}
      >
        <SVG src={icon} className="w-10 h-10 text-gray-800"/>
        <p className="font-light text-gray-800">{name}</p>
      </div>
    </Link>
  );
}

export default IconCard;
