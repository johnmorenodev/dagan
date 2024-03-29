import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as users from "../schema/user";

export const DB_URL = process.env.DATABASE_URL!;

// for query purposes
const queryClient = postgres(DB_URL);
export const db = drizzle(queryClient, {
  schema: {
    ...users,
  },
});
