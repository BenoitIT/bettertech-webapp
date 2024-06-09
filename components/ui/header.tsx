"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import { IoIosArrowForward } from "react-icons/io";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          <div className="flex  gap-2 md:gap-4 w-full justify-center items-center text-sm lg:text-base">
            <Link href="/#about" className="hover:text-emerald-700">About us</Link>
            <Link href="/#contact" className="hover:text-emerald-700">Contact us</Link>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="btn-sm text-gray-200 bg-emerald-700 hover:bg-green-900 ml-3 flex gap-1 w-[120px]"
                >
                  <span>Sign in</span>
                  <IoIosArrowForward />
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
