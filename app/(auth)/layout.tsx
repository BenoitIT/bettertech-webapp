"use client";
import { useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: any = useSession();
  const router = useRouter();
  if (session?.data?.accessToken) {
    return router.push("/dashboard");
  } else {
    return (
      <main className="grow">
        <ToastContainer position="top-right" />
        {children}
      </main>
    );
  }
}
