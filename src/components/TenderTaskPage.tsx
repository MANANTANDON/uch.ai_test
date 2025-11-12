import { Avatar, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { CardsView } from "./CardsView";

export const TenderTaskPage: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [buttonSelect, setButtonSelect] = useState("board");
  return (
    <>
      <div className="bg-[#1F2024] p-4 rounded-2xl ml-2 mr-4 mt-4 h-[calc(100vh-30px)] overflow-scroll">
        <div className="flex items-center justify-between border-b border-[#6D6E72] pb-4">
          <div className="text-zinc-50 sfpro text-2xl font-bold">
            Tender Tasks
          </div>
          <div className="flex items-center gap-5">
            {/* Search Box */}
            <div className="bg-zinc-200 flex items-center gap-1.5 pl-2 pr-0.5 py-0.5 rounded-md">
              <input
                value={searchText}
                className="w-[350px] max-w-[350px] outline-0 font-medium"
                placeholder="Search for Tenders"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="hover:cursor-pointer font-semibold py-1.5 px-2 rounded-[100px] hover:bg-zinc-400/40">
                􀊫
              </div>
            </div>
            {/* Bell Icon */}
            <div className="text-zinc-50 hover:cursor-pointer hover:bg-zinc-400/40 px-2 py-1 rounded-[100px]">
              􀋙
            </div>
            {/* Logged in user */}
            <div>
              <Tooltip title="Manan Tandon" arrow>
                <Avatar
                  sx={{ width: 30, height: 30, bgcolor: "#F86263" }}
                  className="hover:cursor-pointer"
                >
                  M
                </Avatar>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-0 mt-4">
          <div className="bg-[#000000] w-full rounded-[100px] flex items-center gap-1">
            <button
              className={`text-zinc-50 px-7 py-2.5 border border-[#000000] ${
                buttonSelect === "list"
                  ? "border-amber-400"
                  : "border-[#000000]"
              } hover:border-amber-400 rounded-[100px] hover:cursor-pointer`}
              onClick={() => setButtonSelect("list")}
            >
              List View
            </button>
            <button
              className={`text-zinc-50 px-7 py-2.5 border border-[#000000] ${
                buttonSelect === "board"
                  ? "border-amber-400"
                  : "border-[#000000]"
              } hover:border-amber-400 rounded-[100px] hover:cursor-pointer`}
              onClick={() => setButtonSelect("board")}
            >
              Board View
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-fit whitespace-nowrap text-zinc-50 py-2 px-4 bg-[#020100] border border-zinc-100 hover:cursor-pointer">
              View Tender Details
            </button>
            <button className="w-fit whitespace-nowrap text-zinc-50 px-3 py-1.5 border border-zinc-100 rounded-[100px] hover:cursor-pointer">
              􀍟 Columns
            </button>
          </div>
        </div>
        <div className="flex items-center gap-[35px] overflow-auto">
          <CardsView />
          <CardsView />
          <CardsView />
          <CardsView />
        </div>
      </div>
    </>
  );
};
