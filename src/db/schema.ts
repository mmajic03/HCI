import { pgTable, text, integer, serial, timestamp } from "drizzle-orm/pg-core";


export const food = pgTable("food", {
  id: serial("id").primaryKey(), 
  name: text("name").notNull(), 
  typeOfDiet: text("type_of_diet").notNull(), 
});


export const users = pgTable("users", {
  id: serial("id").primaryKey(), 
  username: text("username").notNull(), 
  email: text("email").notNull().unique(), 
  created_at: timestamp("created_at").defaultNow(),
});
