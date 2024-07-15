import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import cn from "classnames";

interface IOption {
  label: JSX.Element | string;
  value: string | number;
}
interface IButtonProps {
  classNames?: string;
  options: IOption[];
  onClick?: (value: string | number) => void;
}

function Button({ options, onClick }: IButtonProps) {
  const [selectedOption, setSelectedOption] = useState<IOption>(options[0]);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function handleWindowClick(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setActive(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    options.length > 0 && (
      <div className="relative" ref={ref}>
        <div className="rounded-full flex flex-row overflow-hidden cursor-pointer whitespace-nowrap">
          <div
            className={cn(
              "bg-slate-100 hover:bg-slate-200 py-2.5 px-5 pr-2.5",
              options.length === 1 && "pr-5"
            )}
            onClick={() => onClick && onClick(selectedOption.value)}
          >
            {selectedOption.label}
          </div>
          {options.length > 1 && (
            <div
              className="bg-slate-100 hover:bg-slate-200 py-2.5 px-5 pl-2.5 flex items-center justify-center"
              onClick={() => setActive((curr) => !curr)}
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
                <path d="m18 15-6-6-6 6" />
              </svg>
            </div>
          )}
        </div>
        {options.length > 1 && active && (
          <div className="absolute top-[-200px] right-0 w-fit rounded bg-white shadow-md whitespace-nowrap">
            {options.map((option) => (
              <div
                key={option.value}
                className="cursor-pointer hover:bg-slate-50 px-2.5 py-5"
                onClick={() => {
                  setSelectedOption(option);
                  if (onClick) onClick(option.value);
                  setActive(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  );
}

export default Button;
