import { NavLink, Outlet } from "react-router-dom";
// import logo from "../assets/logo.svg";
import {
  IconNavHome,
  IconNavMovies,
  IconNavSeries,
  IconNavBookmark,
} from "../components/Icon";

export const Wrapper = () => {
  const linkActiveClass = (nav: { isActive: boolean }) =>
    nav.isActive ? "text-white" : "text-[#5A698F]";
  return (
    <section className="p-4 flex relative">
      <aside className="fixed left-4 top-4 bg-secondary  p-8 h-[calc(100vh_-_32px)] rounded-[20px] w-16">
        <div className="flex flex-col items-center  h-full">
          <NavLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="26"
              viewBox="0 0 33 26"
              fill="none"
            >
              <path
                d="M26.463 0.408386L29.663 6.80839H24.863L21.663 0.408386H18.463L21.663 6.80839H16.863L13.663 0.408386H10.463L13.663 6.80839H8.86304L5.66304 0.408386H4.06304C2.29504 0.408386 0.879037 1.84039 0.879037 3.60839L0.863037 22.8084C0.863037 24.5764 2.29504 26.0084 4.06304 26.0084H29.663C31.431 26.0084 32.863 24.5764 32.863 22.8084V0.408386H26.463Z"
                fill="#FC4747"
              />
            </svg>
          </NavLink>
          <nav className="flex flex-col gap-6 mt-16">
            <NavLink to="/home" className={linkActiveClass}>
              <IconNavHome />
            </NavLink>
            <NavLink to="/movies" className={linkActiveClass}>
              <IconNavMovies />
            </NavLink>
            <NavLink to={"/tv-series"} className={linkActiveClass}>
              <IconNavSeries />
            </NavLink>
            <NavLink to={"/bookmark"} className={linkActiveClass}>
              <IconNavBookmark />
            </NavLink>
          </nav>
          Hey
        </div>
      </aside>
      <main className="text-red relative w-[calc(100%_-_80px)] left-16 mx-8 pt-8">
        <Outlet />
      </main>
    </section>
  );
};
