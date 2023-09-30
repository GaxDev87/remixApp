import { Outlet } from "@remix-run/react";

export function Layout() {
  return (
    <>
      <header>
        <h1>Welcome to Remix</h1>
      </header>
      <Outlet />
      <footer>@copyright 2023</footer>
    </>
  );
}
