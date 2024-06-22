import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const id = request.url.split("transactions/")[1];
    const transaction = await prisma.transaction.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        activity: true,
        client: true,
      },
    });
    if (transaction) {
      return NextResponse.json({
        status: 200,
        data: transaction,
      });
    }
  } catch (err) {
    return;
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const id = request.url.split("transactions/")[1];
    const transaction = await prisma.transaction.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        activity: true,
        client: true,
      },
    });
    if (transaction) {
      const markedAsPaid = await prisma.transaction.update({
        where: {
          id: Number(id),
        },
        data: {
          status: "paid",
        },
      });
      return NextResponse.json({
        status: 200,
        data: markedAsPaid,
      });
    }
  } catch (err) {
    return;
  }
};
