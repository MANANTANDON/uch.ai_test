import { MENUS } from "@/constant";
import { Drawer } from "@mui/material";
import React, { useState } from "react";

export const MobileSideMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="text-zinc-50 p-4 flex items-center gap-3">
        <div onClick={() => setOpen(true)}>􀌇</div> <div>Dashboard</div>
      </div>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: "70vw", // 60% of screen width
            backgroundColor: "#000000",
            color: "white",
            border: "1px solid #FF6B0040",
            p: 2,
          },
        }}
      >
        <div>
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200/20 ">
            <div className="font-semibold text-xl">Tender Drawer</div>
            <div onClick={() => setOpen(false)}>􀆄</div>
          </div>
          <div className="mt-5">
            {MENUS.map((item, key) => (
              <div
                className="flex items-center gap-3 pr-4 py-3 hover:bg-amber-500/40 cursor-pointer rounded-lg"
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
                <div
                  className={`whitespace-nowrap ${
                    item.name === "Tender Task"
                      ? "text-amber-400/90"
                      : "text-zinc-50"
                  }`}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};
