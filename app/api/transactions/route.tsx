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
    const activity = await prisma.activity.findFirst({
      where: {
        id: Number(body.actId),
      },
    });
    if (activity) {
      const amountTobeEarned = body.quantity * activity.price;
      const transaction = await prisma.transaction.create({
        data: {
          clientId: body.clientId,
          actId: body.actId,
          quantity: body.quantity,
          unit: body.unit,
          amountEarned: amountTobeEarned,
          doneAt:body.doneAt
        },
      });
      if (transaction) {
        return NextResponse.json({
          message: "Transaction is recorded successfully",
          status: 201,
          transaction,
        });
      } else {
        return NextResponse.json({
          message: "Could not record this transaction. something went wrong",
          status: 400,
        });
      }
    }
  } catch (err) {
    return;
  }
};


export const GET = async () => {
  try {
    const transactions = await prisma.transaction.findMany({
      include:{
        client:true,
        activity:true
      }
    });
    if (transactions) {
      return NextResponse.json({
        status: 200,
        data: transactions,
      });
    }
  } catch (err) {
    return;
  }
};