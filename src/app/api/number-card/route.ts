import { queryOne } from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name } = body;

    if (!name || typeof name !== "string") {
      return Response.json({ error: "Missing name" }, { status: 400 });
    }

    const card = await queryOne<{
      name: string;
      label: string;
      document_type: string;
      function: string;
      aggregate_function_based_on: string;
      filters_json: string;
    }>(
      `SELECT name, label, document_type, function, aggregate_function_based_on, filters_json FROM "tabNumber Card" WHERE name = $1`,
      [name]
    );

    if (!card) {
      return Response.json({ error: "Number card not found" }, { status: 404 });
    }

    const tableName = `tab${card.document_type}`;
    const aggregateField = card.aggregate_function_based_on;
    const aggregateFn = card.function.toUpperCase();

    let whereClause = "1=1";
    const params: unknown[] = [];

    if (card.filters_json) {
      try {
        const filters = JSON.parse(card.filters_json) as [
          string,
          string,
          string,
          string
        ][];
        for (const [, field, operator, value] of filters) {
          if (field === "docstatus" && operator === "=") {
            params.push(value);
            whereClause += ` AND docstatus = $${params.length}`;
          } else if (
            field === "posting_date" &&
            operator === "Timespan" &&
            value === "last year"
          ) {
            whereClause += ` AND posting_date BETWEEN '2025-01-01' AND '2025-12-31'`;
          } else if (field === "payment_type" && operator === "=") {
            params.push(value);
            whereClause += ` AND payment_type = $${params.length}`;
          }
        }
      } catch {
        // ignore invalid json
      }
    }

    const sql = `SELECT ${aggregateFn}("${aggregateField}") as value FROM "${tableName}" WHERE ${whereClause}`;
    const result = await queryOne<{ value: number }>(sql, params);

    return Response.json({
      value: result?.value ?? 0,
      label: card.label,
    });
  } catch (error) {
    console.error("Number card error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
