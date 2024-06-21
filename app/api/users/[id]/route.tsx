import prisma from "@/prisma/client";
import {  NextResponse } from "next/server";
export const revalidate = 0;
export const GET = async (request: Request) => {
  try {
    const id = request.url.split("users/")[1];
    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (user) {
      return NextResponse.json({ status: 200, user });
    } else {
      return NextResponse.json({ status: 404, user });
    }
  } catch (err) {
    return NextResponse.json({
      message: "unexpected issue occurs",
      status: 400,
    });
  }
};
