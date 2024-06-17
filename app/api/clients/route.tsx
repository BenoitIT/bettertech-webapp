import { NextRequest, NextResponse } from "next/server";
import schema from "./validation";
import prisma from "@/prisma/client";
export const revalidate=0;
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }
    const newClient = await prisma.client.create({
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
    if (newClient) {
      return NextResponse.json({
        message: "New client is registered successfully",
        status: 201,
        newClient,
      });
    } else {
      return NextResponse.json({
        message: "Could not register this client. something went wrong",
        status: 400,
      });
    }
  } catch (err) {
    return;
  }
};

export const GET = async () => {
  try {
    const clients = await prisma.client.findMany({});
    if (clients) {
      return NextResponse.json({
        status: 200,
        data: clients,
      });
    }
  } catch (err) {
    return;
  }
};
