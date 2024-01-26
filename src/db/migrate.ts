import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./config";

// This will run migrations on the database, skipping the ones already applied
async function main() {
  await migrate(db, { migrationsFolder: "./drizzle" });
  process.exit(0);
}

// Don't forget to close the connection, otherwise the script will hang
main();
