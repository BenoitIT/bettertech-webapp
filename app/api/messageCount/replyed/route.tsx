import prisma from "@/prisma/client";
import { NextResponse } from "next/server";
export const revalidate = 0;

export const GET = async () => {
  const currentYear = new Date().getFullYear();

  const data: any[] = await prisma.$queryRaw`
    WITH months AS (
      SELECT generate_series(1, 12) AS month_num
    )
    SELECT
      TO_CHAR(TO_DATE(months.month_num::text, 'MM'), 'Mon') AS month,
      COALESCE(COUNT(m.id), 0) AS value
    FROM
      months
    LEFT JOIN "Messages" m
    ON EXTRACT(MONTH FROM m."createdAt") = months.month_num
    AND EXTRACT(YEAR FROM m."createdAt") = ${currentYear}
    AND m."responded" = true
    GROUP BY
      months.month_num
    ORDER BY
      months.month_num
  `;

  const statistics = data.map((item) => ({
    month: item.month,
    value: parseInt(item.value, 10),
  }));

  return NextResponse.json({
    status: 200,
    data: statistics,
  });
};
