import React, { FC } from "react";

export const BookmarkIcon: FC<{
  className?: React.HTMLAttributes<HTMLLIElement> | string;
}> = ({ className }) => {
  return (
    <label
      className={`self-end bg-[rgba(16,_20,_30,_0.5)] rounded-[50%] w-8 h-8 flex justify-center items-center 
        cursor-pointer transition-all duration-300 ${className}`}
      htmlFor="bookmark"
    >
      <input
        type="checkbox"
        name="bookmark"
        id="bookmark"
        className="appearance-none w-4 h-4 bg-[url('./assets/icon-bookmark-empty.svg')] cursor-pointer bg-contain bg-center bg-no-repeat checked:bg-[url('./assets/icon-bookmark-full.svg')] checked:bg-contain checked:bg-center checked:bg-no-repeat"
      />
      {""}
    </label>
  );
};
