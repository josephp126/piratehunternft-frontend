import React from "react";
import Footer from "./menue/Footer";
import Nav from "./menue/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
