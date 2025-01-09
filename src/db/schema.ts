import { pgTable, text, integer } from "drizzle-orm/pg-core";

// Definišemo tabelu 'food' sa 'id' kao primarnim ključem
export const food = pgTable("food", {
  id: integer("id").primaryKey(), // Kolona 'id' tipa INTEGER kao primarni ključ
  name: text("name").notNull(), // Kolona 'name' tipa TEXT, ne može biti NULL
  typeOfDiet: text("type_of_diet").notNull(), // Kolona 'type_of_diet' tipa TEXT, ne može biti NULL
});
