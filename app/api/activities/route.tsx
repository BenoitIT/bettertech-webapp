import { NextRequest, NextResponse } from "next/server";
import schema from "./validation";
import prisma from "@/prisma/client";
export const revalidate = 0;
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }
    const newActivity = await prisma.activity.create({
      data: {
        activityName: body.activityName,
        requirements: body.requirements,
        price: body.price,
      },
    });
    if (newActivity) {
      return NextResponse.json({
        message: "New activity is registered successfully",
        status: 201,
        newActivity,
      });
    } else {
      return NextResponse.json({
        message: "Could not register this activity. something went wrong",
        status: 400,
      });
    }
  } catch (err) {
    return;
  }
};

export const GET = async () => {
  try {
    const activities = await prisma.activity.findMany({});
    if (activities) {
      return NextResponse.json({
        status: 200,
        data: activities,
      });
    }
  } catch (err) {
    return;
  }
};
