import React from "react";
import { TODOLIST } from "@/constant";
import { Tooltip } from "@mui/material";
import { StatusCard } from "./Cards/StatusCard";

export const CardsView: React.FC = () => {
  return (
    <>
      <div className="mt-4 shrink-0">
        <div className="bg-[#000000] p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 bg-[#FFBE1A] rounded-[100px]"></div>
              <div className="text-zinc-50 text-lg font-bold">To - Do List</div>
              <div className="bg-[#0F6179] text-[#DCFEFF] px-2 rounded-[50px] ">
                {TODOLIST.length}
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
            {TODOLIST.map((item, key) => (
              <div key={key}>
                <StatusCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
