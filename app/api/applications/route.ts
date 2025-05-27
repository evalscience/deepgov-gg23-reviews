import { NextRequest } from "next/server";
import applicationsRaw from "../../../applications.json";
const applications = applicationsRaw as any[];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  let result = applications;

  const roundId = searchParams.get("roundId");
  const chainId = searchParams.get("chainId");
  const search = searchParams.get("search");
  const id = searchParams.get("id");

  if (roundId) {
    result = result.filter((app: any) => app.roundId == roundId);
  }
  if (chainId) {
    result = result.filter((app: any) => app.chainId == chainId);
  }
  if (search) {
    result = result.filter(
      (app: any) =>
        app.metadata &&
        JSON.stringify(app.metadata)
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }
  if (id) {
    result = result.filter((app: any) => app.id == id);
  }

  // Parse metadata JSON if it's a string
  result = result.map((row: any) => ({
    ...row,
    metadata:
      typeof row.metadata === "string"
        ? JSON.parse(row.metadata)
        : row.metadata,
  }));

  return Response.json(result);
}
