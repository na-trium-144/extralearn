import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
});

export const postsTable = sqliteTable("posts", {
  id: integer().primaryKey({ autoIncrement: true }),
  creatorId: integer("creator_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  content: text().notNull(),
});
