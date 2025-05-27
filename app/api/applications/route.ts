import { NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  let sql = "SELECT * FROM applications WHERE 1=1";
  const params: any[] = [];

  const roundId = searchParams.get("roundId");
  const chainId = searchParams.get("chainId");
  const search = searchParams.get("search");
  const id = searchParams.get("id");

  if (roundId) {
    sql += " AND roundId = ?";
    params.push(roundId);
  }
  if (chainId) {
    sql += " AND chainId = ?";
    params.push(chainId);
  }
  if (search) {
    sql += " AND metadata LIKE ?";
    params.push(`%${search}%`);
  }
  if (id) {
    sql += " AND id = ?";
    params.push(id);
  }
  const rows = db.prepare(sql).all(...params);
  // Parse metadata JSON
  const result = rows.map((row: any) => ({
    ...row,
    metadata: JSON.parse(row.metadata),
  }));

  return Response.json(result);
}
