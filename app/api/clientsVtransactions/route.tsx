import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export const revalidate = 0;

export const GET = async (req: Request) => {
  const currentYear = new Date().getFullYear();

  const data: any[] = await prisma.$queryRaw`
    WITH months AS (
      SELECT generate_series(1, 12) AS month_num
    )
    SELECT
      TO_CHAR(TO_DATE(months.month_num::text, 'MM'), 'Mon') AS month,
      COALESCE(SUM(CASE WHEN t.status IS NOT NULL AND EXTRACT(YEAR FROM t.date) = ${currentYear} THEN t.amountearned ELSE 0 END), 0) AS transactions,
      COALESCE(COUNT(DISTINCT CASE WHEN t.status IS NOT NULL AND EXTRACT(YEAR FROM t.date) = ${currentYear} THEN t.clientId ELSE NULL END), 0) AS clients
    FROM
      months
    LEFT JOIN "transaction" t ON EXTRACT(MONTH FROM t.date) = months.month_num AND EXTRACT(YEAR FROM t.date) = ${currentYear}
    GROUP BY
      months.month_num
    ORDER BY
      months.month_num
  `;

  const statistics = data.map((item) => ({
    month: item.month,
    transactions: parseFloat(item.transactions),
    clients: parseInt(item.clients),
  }));

  return NextResponse.json({
    status: 200,
    data: statistics,
  });
};
