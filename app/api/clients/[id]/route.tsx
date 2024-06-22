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

export const PUT = async (request: NextRequest) => {
  try {
    const body= await request.json();
    const id = request.url.split("clients/")[1];
    const client = await prisma.client.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (client) {
      const updatedClient = await prisma.client.update({
        where: {
          id: Number(id),
        },
        data: {
          clientNames: body.clientNames,
          email: body.email,
          phoneNumber: body.phoneNumber,
          clientType: body.clientType,
          industry: body.industry,
          province: body.province,
          district: body.district,
        },
      });
      return NextResponse.json({
        status: 200,
        data: updatedClient,
      });
    }
  } catch (err) {
    return;
  }
};
