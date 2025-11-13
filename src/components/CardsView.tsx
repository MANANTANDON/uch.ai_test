import React from "react";
import { TODOLIST } from "@/constant";
import { Tooltip } from "@mui/material";
import { StatusCard } from "./Cards/StatusCard";

interface CardsViewInterface {
  title: string;
}

export const CardsView: React.FC<CardsViewInterface> = ({ title }) => {
  const filteredList =
    title === "To-Do List"
      ? TODOLIST
      : TODOLIST.filter((item) => item.status === title);

  return (
    <div className="shrink-0">
      <div className="bg-[#000000] p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="h-2.5 w-2.5 rounded-[100px]"
              style={{
                backgroundColor:
                  title === "To-Do List"
                    ? "#FFBE1A"
                    : title === "In Progress"
                    ? "#06BCFD"
                    : title === "Not Started"
                    ? "#E97925"
                    : title === "Completed"
                    ? "#0EAC35"
                    : "",
              }}
            />
            <div className="text-zinc-50 text-lg font-bold">{title}</div>
            <div className="bg-[#0F6179] text-[#DCFEFF] px-2 rounded-[50px]">
              {filteredList.length}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Tooltip title="Add" arrow>
              <div className="text-zinc-50 hover:cursor-pointer font-semibold">
                􀅼
              </div>
            </Tooltip>
            <Tooltip title="More options" arrow>
              <div className="text-zinc-50 hover:cursor-pointer font-semibold">
                􀍠
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-col gap-[18px] mt-3">
          {filteredList.map((item, key) => (
            <StatusCard key={key} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
