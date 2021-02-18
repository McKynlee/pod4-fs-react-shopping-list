-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
-- Clear table if it exists
DROP TABLE IF EXISTS "shopping_list";

-- Create Table
CREATE TABLE "shopping_list" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80),
  "quantity" NUMERIC,
	"unit" VARCHAR(20),
  "isPurchased" BOOLEAN DEFAULT FALSE
);

-- Test Data 
INSERT INTO "shopping_list"
	("name", "quantity", "unit")
VALUES
  ('Milk', 1, 'gal'),
  ('Pasta', 3, 'boxes'),
  ('Grapes', 1, 'bunch');