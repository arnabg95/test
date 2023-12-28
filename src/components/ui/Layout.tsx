import React from "react";
import NavbarCustom from "./Navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <>
      <NavbarCustom />
      <main>{children}</main>
    </>
  );
}
