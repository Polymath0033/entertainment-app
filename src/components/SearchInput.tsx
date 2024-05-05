import { FC } from "react";
import searchIcon from "../assets/icon-search.svg";
export const InputSearch: FC = () => {
  return (
    <>
      <label className="flex gap-4 mr-8" htmlFor="search">
        <i>
          <img src={searchIcon} alt="search" />
        </i>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for movies or TV series"
          className="w-full flex bg-transparent text-2xl font-normal 
         border-transparent focus:outline-none focus:ring-0 
         focus:border-b focus:border-solid focus:border-gray-500 placeholder-gray-500 pb-2 text-white transition-colors duration-[0.3s] "
        />
      </label>
    </>
  );
};
