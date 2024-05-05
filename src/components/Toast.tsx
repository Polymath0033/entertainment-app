import { FC } from "react";

export const Toast: FC<{ title?: string; message?: string }> = ({
  title,
  message,
}) => {
  return (
    <div className="error-block min-w-28 w-[calc(100%_-_40px)] rounded sm:w-2/5 bg-white my-4 p-4 flex items-center text-red text-left gap-8  absolute left-1/2 top-0 -translate-x-1/2">
      <div className="error-block-icon text-[2rem] w-12 h-12 text-white bg-red rounded-[50%] flex justify-center items-center">
        !
      </div>
      <div className="error-block-text">
        <h2 className="text-xl m-0">{title}</h2>
        <p>{message}Yusuf </p>
      </div>
    </div>
  );
};
