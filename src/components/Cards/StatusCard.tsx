import { Box, Modal, Tooltip } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

interface StatusCardData {
  status: string;
  title: string;
  description: string;
  assignee: string;
  date: string;
  priority: string;
  comments: number;
  attachments: number;
}

interface StatusCardInterface {
  data: StatusCardData;
}
interface DetailsCardInterface {
  data: StatusCardData;
  classname: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const getHoverShadow = (status: string) => {
  if (status === "In Progress") {
    return "hover:shadow-[0_0_15px_rgba(10,181,250,0.5)]";
  } else if (status === "Not Started") {
    return "hover:shadow-[0_0_15px_rgba(220,115,34,0.5)]";
  } else if (status === "Completed") {
    return "hover:shadow-[0_0_15px_rgba(0,169,47,0.5)]";
  }
  return "";
};

const DetailsCard: React.FC<DetailsCardInterface> = ({
  data,
  classname,
  setOpen,
}) => {
  return (
    <div
      className={`bg-[#1F2024] rounded-xl ${classname}`}
      onClick={() => setOpen(true)}
    >
      {/* Task Status */}
      <div className="px-3 pt-3 flex items-center justify-between">
        <div
          style={{
            backgroundColor:
              data.status === "In Progress"
                ? "#0AB5FA50"
                : data.status === "Not Started"
                ? "#DC732250"
                : "#00A92F50",
          }}
          className="px-4 py-1 flex items-center gap-2 rounded-[20px]"
        >
          <div
            className="h-3 w-3 rounded-[10px]"
            style={{
              backgroundColor:
                data.status === "In Progress"
                  ? "#0AB5FA"
                  : data.status === "Not Started"
                  ? "#DC7322"
                  : "#00A92F",
            }}
          />
          <div className="text-zinc-100 text-xs">{data.status}</div>
        </div>
        <Tooltip title="More options" arrow>
          <div className="text-zinc-50 hover:cursor-pointer font-semibold">
            􀍠
          </div>
        </Tooltip>
      </div>
      {/* Task Title */}
      <div className="text-zinc-50 px-3 text-lg py-2 font-semibold">
        {data.title}
      </div>
      {/* Task Description */}
      <div className="text-zinc-50 px-3 text-xs py-2">{data.description}</div>
      {/*Task Assignee */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="text-zinc-50 text-sm font-semibold">Assignee</div>
        <div className="text-zinc-50">
          <div className="relative overflow-hidden rounded-[50px] h-[25px] w-[25px]">
            <Image
              src="/images/manan.jpeg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt={data.assignee}
            />
          </div>
        </div>
      </div>
      {/* Task Date and Task Priority */}
      <div className="flex items-center justify-between px-3 pt-2 pb-4">
        <div className="text-zinc-50 text-sm">􀉉 {data.date}</div>
        <div
          className="text-zinc-50 text-xs w-[50px] max-w-[50px] flex items-center justify-center rounded-md py-0.5"
          style={{
            backgroundColor:
              data.priority === "Low"
                ? "#125625"
                : data.priority === "High"
                ? "#71262B"
                : "",
          }}
        >
          {data.priority}
        </div>
      </div>
      <div className="flex items-center gap-3 border-t border-[#3F4044] p-3">
        <div className="text-zinc-50 text-xs">􀌤 {data.comments} Comments</div>
        <div className="text-zinc-50 text-xs">
          􀉢 {data.attachments} Attachments
        </div>
      </div>
    </div>
  );
};

export const StatusCard: React.FC<StatusCardInterface> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <DetailsCard
        data={data}
        classname={`w-[348px] max-w-[348px] hover:scale-[1.02] transition-all duration-200 cursor-pointer ${getHoverShadow(
          data.status
        )}`}
        setOpen={setOpen}
      />
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95%", md: 500 },
            backgroundColor: "#000000",
          }}
          className="p-4 outline-0 text-zinc-50 border border-amber-500/30 rounded-xl"
        >
          <div
            className="w-full flex flex-row-reverse cursor-pointer"
            onClick={() => setOpen(false)}
          >
            􀆄
          </div>
          <DetailsCard data={data} classname="w-full mt-4" setOpen={setOpen} />
        </Box>
      </Modal>
    </>
  );
};
