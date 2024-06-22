import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const id = request.url.split("activities/")[1];
    const activity = await prisma.activity.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (activity) {
      return NextResponse.json({
        status: 200,
        data: activity,
      });
    }
  } catch (err) {
    return;
  }
};
export const PUT = async (request: NextRequest) => {
  try {
    const id = request.url.split("activities/")[1];
    const body = await request.json();
    const activity = await prisma.activity.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (activity) {
      const updatedActivity = await prisma.activity.update({
        where: {
          id: Number(id),
        },
        data: {
          activityName: body.activityName,
          requirements: body.requirements,
          price: body.price,
        },
      });
      return NextResponse.json({
        status: 200,
        data: updatedActivity,
      });
    }
  } catch (err) {
    return;
  }
};
