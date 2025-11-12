import { Avatar, Tooltip } from "@mui/material";
import React, { useState } from "react";

export const TenderTaskPage: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <>
      <div className="bg-[#1F2024] p-4 rounded-2xl ml-2 mr-4 mt-4 h-[calc(100vh-30px)]">
        <div className="flex items-center justify-between border-b border-[#6D6E72] pb-4">
          <div className="text-zinc-50 sfpro text-2xl font-bold">
            Tender Tasks
          </div>
          <div className="flex items-center gap-5">
            {/* Search Box */}
            <div className="bg-zinc-200 flex items-center gap-1.5 pl-2 pr-1 py-1 rounded-md">
              <input
                value={searchText}
                className="w-[350px] max-w-[350px] outline-0 font-medium"
                placeholder="search text..."
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
      </div>
    </>
  );
};
