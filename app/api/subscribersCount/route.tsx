
import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
export const revalidate = 0;

export const GET = async () => {
  const currentYear = new Date().getFullYear();

  const data: any[] = await prisma.$queryRaw`
    WITH months AS (
      SELECT generate_series(1, 12) AS month_num
    )
    SELECT
      TO_CHAR(TO_DATE(months.month_num::text, 'MM'), 'Mon') AS month,
      COALESCE(COUNT(s.id), 0) AS value
    FROM
      months
    LEFT JOIN "Subcribers" s
    ON EXTRACT(MONTH FROM s."date") = months.month_num
    AND EXTRACT(YEAR FROM s."date") = ${currentYear}
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
