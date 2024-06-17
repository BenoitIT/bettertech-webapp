import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const isSubscriberExist = await prisma.subcribers.findFirst({
      where: {
        email: body.email,
      },
    });
    if (isSubscriberExist) {
      return NextResponse.json({
        message: "You are already subscribed!",
        status: 400,
      });
    }
    const subscriber = await prisma.subcribers.create({
      data: {
        email: body.email,
      },
    });
    return NextResponse.json({
      message: "You have successfully subscribed",
      status: 201,
      subscriber,
    });
  } catch (err) {
    return NextResponse.json({
      message: "unexpected issue occurs",
      status: 400,
    });
  }
};

export const GET = async () => {
  try {
    const data = await prisma.subcribers.findMany({});
    return NextResponse.json({ status: 200, data });
  } catch (err) {
    return NextResponse.json({
      message: "unexpected issue occurs",
      status: 400,
    });
  }
};
