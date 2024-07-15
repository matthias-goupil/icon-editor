"use client";
import { hexToRgba, rgbaToHex } from "@/lib/rgba";
import React, { useEffect, useRef, useState } from "react";
import { RgbaColorPicker } from "react-colorful";

interface IColorPickerProps {
  hexColor: string;
  onChange?: (value: string) => void;
}

function ColorPicker({ hexColor, onChange }: IColorPickerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [inputColor, setInputColor] = useState(hexColor);

  function handleWindowClick(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      if (ref.current === event.target) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <div ref={ref} className="w-fit relative">
      <div className="flex items-center gap-2 rounded border-2">
        <div
          className={`w-12 h-8 cursor-pointer`}
          style={{
            backgroundColor: hexColor,
          }}
          onClick={() => {
            setActive((curr) => !curr);
          }}
        ></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (onChange) onChange(hexColor);
          }}
        >
          <input
            type="text"
            name="color"
            className="uppercase w-fit"
            value={inputColor}
            onChange={(e) => setInputColor(e.target.value)}
          />
        </form>
      </div>
      {active && (
        <div className="w-fit p-2 bg-white shadow absolute z-10">
          <RgbaColorPicker
            color={hexToRgba(hexColor)}
            onChange={(newColor) => {
              if (onChange) onChange(rgbaToHex(newColor));
              setInputColor(rgbaToHex(newColor));
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
