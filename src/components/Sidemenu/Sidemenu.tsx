import { useRouter } from "next/router";
import React from "react";

interface SidemenuProps {
  onToggle: () => void;
  isExpanded: boolean;
}

const MENUS = [
  { name: "Search", icon: "􀊫", path: "" },
  { name: "Tender Task", icon: "􀥜", path: "" },
  { name: "Analytics", icon: "􀑁", path: "" },
  { name: "Contact us", icon: "􀌾", path: "" },
];

export const Sidemenu: React.FC<SidemenuProps> = ({ onToggle, isExpanded }) => {
  const router = useRouter();

  return (
    <>
      <div
        className="text-zinc-50  rounded  px-4 py-2 font-normal flex items-center gap-3 mt-4"
        style={{ justifyContent: !isExpanded ? "center" : "" }}
      >
        <div className="hover:cursor-pointer" onClick={onToggle}>
          􀏚
        </div>
        {isExpanded && (
          <div className="text-zinc-50 whitespace-nowrap">Dashboard</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {MENUS.map((item, key) => (
          <div
            className="flex items-center gap-3 px-4 py-2 hover:bg-amber-500/40 cursor-pointer rounded-lg"
            style={{ justifyContent: !isExpanded ? "center" : "" }}
            key={key}
          >
            <div
              className={
                item.name === "Tender Task"
                  ? "text-amber-400/90"
                  : "text-zinc-50"
              }
            >
              {item.icon}
            </div>
            {isExpanded && (
              <div className="text-zinc-50 whitespace-nowrap">{item.name}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
