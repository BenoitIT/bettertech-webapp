export const metadata = {
  title: "Sign In - Admin",
  description: "login page",
};

import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
  return (
    <section className="bg-gradient-to-b from-gray-300 to-white">
      <div className="max-w-6xl">
        <div className=" flex justify-center items-center h-screen w-screen">
          <div className="md:w-[550px] w-full  rounded bg-white p-6 shadow">
            <Link href="/" className="mb-10 w-full flex justify-center items-center text-center">
              <Image
                src={"/images/logooo.png"}
                quality={100}
                width={120}
                height={120}
                alt=""
                className="rounded"
              />
            </Link>
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label
                      className="block text-gray-800 text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    id="password"
                    type="password"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-emerald-700 hover:bg-emerald-900 w-full">
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
