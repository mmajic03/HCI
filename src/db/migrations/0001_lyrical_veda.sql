CREATE TABLE "food" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"type_of_diet" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "pages" CASCADE;