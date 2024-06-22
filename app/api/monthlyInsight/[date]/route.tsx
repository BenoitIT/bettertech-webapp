import prisma from "@/prisma/client";
import { NextResponse } from "next/server";
export const revalidate = 0;

export const GET = async (req: Request) => {
  const now = new Date();
  const date = !req.url.split("monthlyInsight/")[1].startsWith("00")
    ? req.url.split("monthlyInsight/")[1]
    : now.toISOString().slice(0, 7);
  const allActivities = await prisma.activity.findMany({
    distinct: "activityName",
  });
  const activitiesDone = await prisma.transaction.findMany({
    where: {
      doneAt: {
        startsWith: date,
      },
    },
    select: {
      activity: true,
    },
    distinct: "actId",
  });
  const activitiesDonePercent =
    (activitiesDone.length * 100) / allActivities.length || 0;
  const cashMaid = await prisma.transaction.findMany({
    where: {
      doneAt: {
        startsWith: date,
      },
    },
  });
  const totalCashMade = cashMaid.reduce(
    (init: any, curr: any) => init + curr.amountearned,
    0
  );
  const cashRecieved = await prisma.transaction.findMany({
    where: {
      status: "paid",
      doneAt: {
        startsWith: date,
      },
    },
  });
  const totalCashRecieved = cashRecieved.reduce(
    (init: any, curr: any) => init + curr.amountearned,
    0
  );
  const cashRecievedPercent = (totalCashRecieved * 100) / totalCashMade || 0;
  const unpaidCash = await prisma.transaction.findMany({
    where: {
      status: "unpaid",
      doneAt: {
        startsWith: date,
      },
    },
  });
  const totalCashUnPaid = unpaidCash.reduce(
    (init: any, curr: any) => init + curr.amountearned,
    0
  );
  const totalCashUnpaidPercent = (totalCashUnPaid * 100) / totalCashMade || 0;
  return NextResponse.json({
    status: 200,
    activitiesDone: activitiesDone.length,
    activityDonePercent: activitiesDonePercent,
    cashMade: totalCashMade,
    cashRecievedPercent: cashRecievedPercent,
    cashReceived: totalCashRecieved,
    unpaidCash: totalCashUnPaid,
    unpaidCashPercent: totalCashUnpaidPercent,
  });
};
