import Link from "next/link";
import React, { SyntheticEvent } from "react";

interface IconCardProps {
  name: string;
  icon: string;
  onClick?: (e: SyntheticEvent) => void;
}

function IconCard({ name, icon, onClick }: IconCardProps) {

  return (
    <Link href={`/icons/${name}`} onClick={onClick}>
      <div
        onClick={onClick}
        className="flex justify-center items-center bg-slate-100 w-16 h-16 rounded-xl cursor-pointer hover:shadow"
        title={name}
        dangerouslySetInnerHTML={{ __html: icon }}
      >
      </div>
    </Link>
  );
}

export default IconCard;
