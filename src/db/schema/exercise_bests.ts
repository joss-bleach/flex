import { integer, pgTable, real, timestamp, uuid } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";
import { exercises } from "./exercises";

export const exerciseBests = pgTable("exercise_bests", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull(),
  exerciseId: uuid("exercise_id")
    .notNull()
    .references(() => exercises.id),
  weight: real("weight"),
  reps: integer("reps").notNull(),
  dateAchieved: timestamp("date_achieved", { withTimezone: true }).defaultNow(),
  ...timestamps,
});
