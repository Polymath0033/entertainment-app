import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <main className="bg-primary w-full min-h-screen ">
      <Outlet />
    </main>
  );
};
