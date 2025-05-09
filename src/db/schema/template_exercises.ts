import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";
import { workoutTemplates } from "./workout_templates";
import { exercises } from "./exercises";

export const templateExercises = pgTable("template_exercises", {
  id: uuid("id").primaryKey().defaultRandom(),
  templateId: uuid("template_id")
    .notNull()
    .references(() => workoutTemplates.id),
  exerciseId: uuid("exercise_id")
    .notNull()
    .references(() => exercises.id),
  order: integer("order").notNull(),
  targetRepRange: varchar("target_rep_range", { length: 50 }).notNull(),
  ...timestamps,
});
