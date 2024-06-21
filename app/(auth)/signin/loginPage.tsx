"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { Alert } from "antd";
import { toast } from "react-toastify";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setError] = useState<string>("");
  const [closeAlert, setCloseAlert] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const onClose = () => {
    setCloseAlert(true);
  };
  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (email.length < 1) {
        setError("Please fill the email!");
        setCloseAlert(false);
      } else if (password.length < 1) {
        setError("Enter your password!");
        setCloseAlert(false);
      } else {
        setCloseAlert(true);
        setLoading(true);
        const isLoggedIn = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        if (isLoggedIn?.status == 401) {
          toast.error("Incorrect username and password!");
          setLoading(false);
        } else if (isLoggedIn?.ok) {
          toast.success("You are logged in successfully.");
          setLoading(false);
        } else {
          toast.error("Check internet connection!");
          setLoading(false);
        }
      }
    } catch (err) {
      return toast.error("Check internet connection!");
      setLoading(false);
    }
  };
  return (
    <section className="bg-gradient-to-b from-gray-300 to-white">
      <div className="max-w-6xl">
        <div className=" flex justify-center items-center h-screen w-screen flex-col gap-2">
          {errorMessage.length < 0 || closeAlert ? (
            ""
          ) : (
            <Alert
              message={errorMessage}
              type="warning"
              closable
              onClose={onClose}
            />
          )}
          <div className="md:w-[550px] w-full  rounded bg-white p-6 shadow">
            <Link
              href="/"
              className="mb-10 w-full flex justify-center items-center text-center"
            >
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
                    className="form-input w-full text-gray-800 placeholder:text-sm"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    className="form-input w-full text-gray-800 placeholder:text-sm"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    className="btn text-white bg-emerald-700 hover:bg-emerald-900 w-full"
                    type="button"
                    onClick={handleSubmit}
                  >
                    {loading ? "Loading..." : "Sign in"}
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
