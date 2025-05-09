import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";

export const workoutTemplates = pgTable("workout_templates", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  ...timestamps,
});
