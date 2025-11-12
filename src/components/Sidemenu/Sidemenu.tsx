import { useRouter } from "next/router";
import React from "react";

interface SidemenuProps {
  onToggle: () => void;
  isExpanded: boolean;
}

export const Sidemenu: React.FC<SidemenuProps> = ({ onToggle, isExpanded }) => {
  const router = useRouter();
  return (
    <>
      <div
        className="text-zinc-50 hover:bg-zinc-500 bg-zinc-400 hover:cursor-pointer w-fit text-xl rounded p-2 font-normal"
        onClick={onToggle}
      >
        􀏚
      </div>
      <div className="text-zinc-50 hover:bg-zinc-500 bg-zinc-400 hover:cursor-pointer w-fit text-xl rounded p-2 font-normal">
        􀊫
      </div>
      <div
        className="text-zinc-50 hover:bg-zinc-500 bg-zinc-400 hover:cursor-pointer w-fit text-xl rounded p-2 font-normal"
        onClick={() => router.push("/tender-task")}
      >
        􀥜
      </div>
      <div className="text-zinc-50 hover:bg-zinc-500 bg-zinc-400 hover:cursor-pointer w-fit text-xl rounded p-2 font-normal">
        􀑁
      </div>
      <div className="text-zinc-50 hover:bg-zinc-500 bg-zinc-400 hover:cursor-pointer w-fit text-xl rounded p-2 font-normal">
        􀌾
      </div>
    </>
  );
};
