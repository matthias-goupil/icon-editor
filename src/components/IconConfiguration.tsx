import { useIconStore } from "@/store";
import { Icon } from "@/types/Icon";
import React from "react";
import SVG from "react-inlinesvg";

interface IConConfigurationProps {
  icon?: Icon;
}

function IconConfiguration({ icon }: IConConfigurationProps) {
  const { selectedIcon, setSelectedIcon } = useIconStore();

  function handleCopy() {
    if (selectedIcon) {
      navigator.clipboard.writeText(selectedIcon.icon);
    }
  }

  function handleDownload() {
    if (selectedIcon) {
      const fileContent = selectedIcon.icon;
      const fileName = `${selectedIcon.name}.svg`;

      const blob = new Blob([fileContent], { type: "image/svg+xml" });

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    }
  }

  return (
    selectedIcon && (
      <div
        className="bg-white rounded-t-xl h-60 fixed bottom-0 right-52 p-8 flex gap-8 shadow-top"
        // style={{ width: "calc(100% - 24rem - 13rem - 4rem - 4rem)" }}
      >
        <div className="h-44 w-44 bg-slate-50 flex items-center justify-center p-4 rounded-xl">
          <SVG src={selectedIcon.icon} className="w-full h-full" />
        </div>
        <div className="w-full">
          <div
            className="flex items-center justify-between w-full cursor-pointer"
            onClick={() => {
              setSelectedIcon(undefined);
            }}
          >
            <h2 className="font-semibold text-xl capitalize">
              {selectedIcon.name}
            </h2>
            <div>
              <div className="p-2 bg-slate-100 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
            </div>
          </div>

          <button onClick={handleCopy}>Copy</button>
          <button onClick={handleDownload}>Download</button>
        </div>
      </div>
    )
  );
}

export default IconConfiguration;
