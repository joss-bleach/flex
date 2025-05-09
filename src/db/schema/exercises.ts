import {
  pgTable,
  uuid,
  text,
  varchar,
  boolean,
  real,
  jsonb,
} from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";

export const exercises = pgTable("exercises", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  equipment: varchar("equipment", { length: 100 }).notNull(),
  primaryMuscleGroup: varchar("primary_muscle_group", {
    length: 100,
  }).notNull(),
  secondaryMuscleGroups: jsonb("secondary_muscle_groups")
    .$type<string[]>()
    .notNull(),
  recommendedRepRange: varchar("recommended_rep_range", {
    length: 50,
  }).notNull(),
  incrementSize: real("increment_size").notNull(),
  overloadMethods: jsonb("overload_methods").$type<string[]>().notNull(),
  isBodyweight: boolean("is_bodyweight").notNull().default(false),
  difficulty: varchar("difficulty", { length: 50 }).notNull(),
  instructions: text("instructions").notNull(),
  ...timestamps,
});
