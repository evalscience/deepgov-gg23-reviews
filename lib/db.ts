import Database from "better-sqlite3";
import path from "path";

const dbPath = path.resolve(process.cwd(), "applications.sqlite");
export const db = new Database(dbPath, { readonly: true });
