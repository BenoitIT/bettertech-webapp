import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const id = request.url.split("clients/")[1];
    const client = await prisma.client.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (client) {
      return NextResponse.json({
        status: 200,
        data: client,
      });
    }
  } catch (err) {
    return;
  }
};
