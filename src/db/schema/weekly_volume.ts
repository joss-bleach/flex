import { pgTable, uuid, varchar, integer, date } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";

export const weeklyVolume = pgTable("weekly_volume", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull(),
  muscleGroup: varchar("muscle_group", { length: 100 }).notNull(),
  weekStart: date("week_start").notNull(),
  totalSets: integer("total_sets").notNull(),
  ...timestamps,
});
