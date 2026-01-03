import { Outlet } from "react-router";
import Header from "@/layout/components/Header";
import Navigation from "@/layout/components/Navigation";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Navigation />
    </>
  );
}
export default DefaultLayout;
