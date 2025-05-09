import { integer, pgTable, real, uuid, varchar } from "drizzle-orm/pg-core";
import { workouts } from "./workouts";
import { exercises } from "./exercises";
import { timestamps } from "./timestamps";

export const sets = pgTable("sets", {
  id: uuid("id").primaryKey().defaultRandom(),
  workoutId: uuid("workout_id")
    .notNull()
    .references(() => workouts.id),
  exerciseId: uuid("exercise_id")
    .notNull()
    .references(() => exercises.id),
  setNumber: integer("set_number").notNull(),
  weight: real("weight"), // null if bodyweight
  reps: integer("reps").notNull(),
  effort: varchar("effort", { length: 50 }).notNull(), // e.g., "Easy", "Moderate", "Hard", "Very Hard"
  ...timestamps,
});
