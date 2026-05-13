import { query, queryOne } from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, fromYear, toYear } = body;

    if (!company || !fromYear || !toYear) {
      return Response.json(
        { error: "company, fromYear, and toYear are required" },
        { status: 400 }
      );
    }

    // Get fiscal year date range
    const fy = await queryOne<{
      year_start_date: string;
      year_end_date: string;
    }>(
      `SELECT year_start_date, year_end_date FROM "tabFiscal Year" WHERE name = $1`,
      [fromYear]
    );

    if (!fy) {
      return Response.json({ error: "Fiscal year not found" }, { status: 404 });
    }

    // Query GL entries for Income and Expense accounts
    const rows = await query<{
      root_type: string;
      total: number;
    }>(
      `SELECT 
        a.root_type,
        CASE 
          WHEN a.root_type = 'Income' THEN SUM(gl.credit) - SUM(gl.debit)
          WHEN a.root_type = 'Expense' THEN SUM(gl.debit) - SUM(gl.credit)
          ELSE 0
        END as total
      FROM "tabGL Entry" gl
      JOIN "tabAccount" a ON gl.account = a.name
      WHERE gl.company = $1 
        AND gl.posting_date >= $2 
        AND gl.posting_date <= $3
        AND gl.is_cancelled = 0
        AND a.root_type IN ('Income', 'Expense')
      GROUP BY a.root_type`,
      [company, fy.year_start_date, fy.year_end_date]
    );

    const income = rows.find((r) => r.root_type === "Income")?.total ?? 0;
    const expense = rows.find((r) => r.root_type === "Expense")?.total ?? 0;
    const netProfit = income - expense;

    return Response.json({
      labels: [fromYear === toYear ? fromYear : `${fromYear} - ${toYear}`],
      datasets: [
        { name: "Income", values: [income] },
        { name: "Expense", values: [expense] },
        { name: "Net Profit/Loss", values: [netProfit] },
      ],
    });
  } catch (error) {
    console.error("PL chart error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
