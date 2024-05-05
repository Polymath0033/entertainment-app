import React, { FC } from "react";
import playIcon from "../assets/icon-play.svg";
export const PlayButton: FC<{
  className?: React.HTMLAttributes<HTMLButtonElement> | string;
}> = ({ className }) => {
  return (
    <button
      type="button"
      className={`self-center rounded-[28.5px] p-1 px-2 text-lg font-normal cursor-pointer group-hover:flex text-white bg-[rgba(255,_255,_255,_0.25)] hidden gap-2 items-center  ${className}`}
    >
      {""}
      <i className="rounded-[50%] w-6 h-6 ">
        <img src={playIcon} alt="play icon" />
      </i>
      <span>Play</span>
    </button>
  );
};
