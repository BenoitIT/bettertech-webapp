import Link from "next/link";
import Logo from "./logo";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleSubscribe = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await response.json();
    if (data.status == 201) {
      toast.success(data.message);
      setEmail("")
      console.log(data)
    } else if (data.status == 400) {
      setEmail("")
      toast.success(data.message);
      console.log(data)
    } else {
      return;
    }
  };
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Better Technology Limited,
              </Link>
              <br />
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Kigali - Rwanda.
              </Link>
            </div>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Solutions</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="/#service"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Incineration
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#service"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Machine Reparation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#service"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Recycling
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Services</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="/#service"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Machines spareparts
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#service"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Reparation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#service"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Installation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#service"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Incineration
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#service"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  RVM
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="/#bout"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#bout"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#bout"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Contact us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href=""
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Tel:+250788552691
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">
              Get some updates and articles to your inbox at some point of time.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="email">
                    Email
                  </label>
                  <div className="relative flex max-w-xs gap-2 flex-col">
                    <input
                      id="email"
                      type="email"
                      className="form-input text-gray-800 px-3 py-[5px] pr-12 text-sm w-full"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="text-sm px-4 py-1 bg-emerald-700 rounded text-white"
                      aria-label="Subscribe"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          <div className="text-sm text-gray-600 mr-4">
            &copy; Better Technology Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
