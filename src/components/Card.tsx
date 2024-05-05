import { FC } from "react";
import { Movie } from "../types/data";
import beyondEarth from "../assets/thumbnails/beyond-earth/trending/small.jpg";
import { BookmarkIcon } from "./BookmarkIcon";

import { PlayButton } from "./PlayButton";
export const MovieList: FC<{ movie?: Movie }> = ({ movie }) => {
  return (
    <li className={"rounded-lg group relative flex flex-col gap-[6px]"}>
      <img
        src={beyondEarth}
        alt="beyond earth"
        className="rounded-lg h-[154px] w-full"
      />

      <BookmarkIcon className="absolute top-4 right-4" />
      <div className="absolute w-full h-[154px]">
        <PlayButton
          className={
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          }
        />
      </div>

      <div className="flex text-white flex-col ">
        <div className="opacity-[0.75] flex items-center gap-1 text-[15px]">
          <time>2019</time>-
          <i className="w-3 normal-case h-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z"
                fill="white"
              />
            </svg>
          </i>
          <span>Movie</span>-<span>PG</span>
        </div>
        <p>Beyond Earth</p>
      </div>
    </li>
  );
};
