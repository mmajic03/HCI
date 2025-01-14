import { pgTable, text, integer, serial, timestamp } from "drizzle-orm/pg-core";

// Definicija tablice 'food'
export const food = pgTable("food", {
  id: serial("id").primaryKey(), // Koristi 'serial' za automatski inkrementirajući ID
  name: text("name").notNull(), // Kolona 'name' tipa TEXT, ne može biti NULL
  typeOfDiet: text("type_of_diet").notNull(), // Kolona 'type_of_diet' tipa TEXT, ne može biti NULL
});

// Definicija tablice 'users'
export const users = pgTable("users", {
  id: serial("id").primaryKey(), // Automatski inkrementirajući ID
  username: text("username").notNull(), // Kolona 'username' ne može biti NULL
  email: text("email").notNull().unique(), // Email mora biti jedinstven
  created_at: timestamp("created_at").defaultNow(), // Zadana vrijednost je trenutni timestamp
});
