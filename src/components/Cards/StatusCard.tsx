import React from "react";

interface StatusCardInterface {
  data: {
    status: string;
    title: string;
    description: string;
    assignee: string;
    date: string;
    priority: string;
    comments: number;
    attachments: number;
  };
}

export const StatusCard: React.FC<StatusCardInterface> = ({ data }) => {
  return (
    <>
      <div className="bg-[#1F2024] rounded-xl">
        <div className="text-zinc-50 px-3">{data.status}</div>
        <div className="text-zinc-50 px-3">{data.title}</div>
        <div className="text-zinc-50 px-3">{data.description}</div>
        <div className="flex items-center justify-between px-3">
          <div className="text-zinc-50">Assignee</div>
          <div className="text-zinc-50">{data.assignee}</div>
        </div>
        <div className="flex items-center justify-between px-3">
          <div className="text-zinc-50">{data.date}</div>
          <div className="text-zinc-50">{data.priority}</div>
        </div>
        <div className="flex items-center gap-3 border-t border-[#3F4044] p-3">
          <div className="text-zinc-50">{data.comments} Comments</div>
          <div className="text-zinc-50">{data.attachments} Attachments</div>
        </div>
      </div>
    </>
  );
};
