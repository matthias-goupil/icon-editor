"use client";

import { useIconStore } from "@/store";
import { Icon } from "@/types/Icon";
import React, { useEffect, useRef, useState } from "react";
import SVG from "react-inlinesvg";
import Button from "./Button";
import ColorPicker from "./ColorPicker";
import { stringToSvg } from "@/lib/svg";

interface IConConfigurationProps {
  icon?: Icon;
}

const downloaderOptions = [
  {
    label: "Download SVG",
    value: "svg",
    download: (icon: Icon) => {
      const fileContent = icon.svg;
      const fileName = `${icon.name}.svg`;
      const blob = new Blob([fileContent], { type: "image/svg+xml" });

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(url);
    },
  },
  {
    label: "Download PNG",
    value: "png",
    download: (icon: Icon) => {
      const fileContent = icon.svg;
      const fileName = `${icon.name}.png`;
      const blob = new Blob([fileContent], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = url;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        const pngUrl = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = pngUrl;
        link.download = fileName;
        link.click();
      };
    },
  },
  {
    label: "Download JPG",
    value: "jpg",
    download: (icon: Icon) => {
      const fileContent = icon.svg;
      const fileName = `${icon.name}.jpg`;
      const blob = new Blob([fileContent], { type: "image/svg+xml" });

      const url = URL.createObjectURL(blob);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = url;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        if (ctx) ctx.fillStyle = "#ffffff";
        ctx?.fillRect(0, 0, img.width, img.height);
        ctx?.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        const pngUrl = canvas.toDataURL("image/jpeg");

        const link = document.createElement("a");
        link.href = pngUrl;
        link.download = fileName;
        link.click();
      };
    },
  },
];

function IconConfiguration() {
  const svgContainer = useRef<HTMLDivElement>(null);
  const { selectedIcon, setSelectedIcon } = useIconStore();
  const [fillColor, setFillColor] = useState("");
  const [strokeColor, setStrokeColor] = useState("");

  function handleCopy() {
    if (selectedIcon) {
      stringToSvg(selectedIcon.svg);
      const newIconString = svgContainer.current?.innerHTML || "";
      console.log(newIconString);
      navigator.clipboard.writeText(newIconString);
    }
  }

  function handleDownload(optionValue: string | number) {
    if (selectedIcon) {
      const newIcon: Icon = {
        name: selectedIcon.name,
        id: selectedIcon.id,
        svg: svgContainer.current?.innerHTML || "",
      };
      console.log(newIcon);
      downloaderOptions
        .find((option) => option.value === optionValue)
        ?.download(newIcon);
    }
  }

  return (
    selectedIcon && (
      <div
        className="bg-white rounded-t-xl fixed bottom-0 right-52 p-8 flex gap-8 shadow-top"
        style={{ width: "calc(100% - 26rem)" }}
      >
        <div className="flex flex-col gap-4">
          <div
            className="h-44 flex-1 bg-slate-50 flex items-center justify-center p-4 rounded-xl"
            ref={svgContainer}
          >
            <SVG
              src={selectedIcon.svg}
              className="w-full h-full text-gray-800"
              stroke={strokeColor}
              fill={fillColor}
              width={200}
              height={200}
            />
          </div>
          <div className="flex gap-4 items-center">
            <Button
              onClick={handleCopy}
              options={[
                {
                  label: "Copy SVG",
                  value: "svg",
                },
              ]}
            />
            <Button onClick={handleDownload} options={downloaderOptions} />
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-semibold text-xl capitalize">
              {selectedIcon.name}
            </h2>
            <div>
              <div
                className="p-2 bg-slate-100 rounded cursor-pointer"
                onClick={() => {
                  setSelectedIcon(undefined);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
            </div>
          </div>
          <div className="">
            <ColorPicker hexColor={fillColor} onChange={setFillColor} />
            <ColorPicker hexColor={strokeColor} onChange={setStrokeColor} />
          </div>
        </div>
      </div>
    )
  );
}

export default IconConfiguration;
