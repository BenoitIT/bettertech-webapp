"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/ui/footer";
import { ToastContainer } from "react-toastify";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
    <ToastContainer position="top-right" />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
