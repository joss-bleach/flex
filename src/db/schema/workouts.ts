import { boolean, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

import { workoutTemplates } from "./workout_templates";

export const workouts = pgTable("workouts", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull(),
  templateId: uuid("template_id").references(() => workoutTemplates.id),
  startedAt: timestamp("started_at", { withTimezone: true }).defaultNow(),
  completedAt: timestamp("completed_at", { withTimezone: true }),
  inProgress: boolean("in_progress").notNull().default(true),
});
