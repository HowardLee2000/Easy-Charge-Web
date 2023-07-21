-- Active: 1689915660121@@localhost@3306@easydatabase
CREATE TABLE merchants (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  contact INT NOT NULL,
  email VARCHAR(35) NOT NULL,
  type VARCHAR(20) NOT NULL,
  description VARCHAR(500) DEFAULT 'no description',
  date DATE NOT NULL,
  PRIMARY KEY(id)
);

DESCRIBE merchants;

-- Select queries
SELECT * FROM merchants;
SELECT merchants.id, merchants.name, merchants.email
FROM merchants
-- sort by id first then followed by items after comma (,)
ORDER BY merchants.id ASC, merchants.name DESC
WHERE merchants.type IN ('retail', 'retails', 'retail stores')
-- limit how many rows to show
LIMIT 5;

INSERT INTO merchants (name, contact, email, type, description, date) VALUES('USER', 00000000, 'user@gmail.com', 'retail', 'testing description', '2023-07-21');

DROP TABLE merchants;

-- Update table
UPDATE merchants
SET merchants.type = 'retail store'
-- can use operator such as <, >, <=, >=, =, <>, AND, OR
WHERE merchants.type = 'retail' or merchants.type = 'retails';