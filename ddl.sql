SET FOREIGN_KEY_CHECKS = 0;
SET AUTOCOMMIT = 0;

-- The query to create the Services table
CREATE OR REPLACE TABLE Services (
    service_id int(11) NOT NULL AUTO_INCREMENT,
    service_name varchar(255) NOT NULL,
    species varchar(255) NOT NULL,
    min_weight int(3) NOT NULL,
    max_weight int(3) NOT NULL,
    price decimal(19, 2) NOT NULL,
    PRIMARY KEY (service_id)
);

-- populate with sample data
INSERT INTO Services (service_name, species, min_weight, max_weight, price)
VALUES ('Bath and Brush', 'Dog', 0, 40, 60.00),
('Haircut', 'Dog', 0, 40, 60.00),
('Bath and Brush', 'Dog', 41, 999, 80.00),
('Haircut', 'Dog', 41, 999, 80.00),
('Litter Box Training', 'Cat', 0, 999, 30.00),
('Behavioral Training', 'Dog', 0, 999, 80.00);

-- The query to create the Customers table
CREATE OR REPLACE TABLE Customers (
    customer_id int(11) NOT NULL AUTO_INCREMENT,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    phone int(11) NOT NULL,
    email varchar(255) NOT NULL,
    order_count int(11) NOT NULL DEFAULT 0,
    PRIMARY KEY (customer_id)
);

-- populate with sample data
INSERT INTO Customers (first_name, last_name, phone, email, order_count)
VALUES ('John', 'Smith', 8746386794, 'jsmith374@gmail.com', 2),
('Karen', 'Norris', 6540387794, 'kiinw849@gmail.com', 1),
('Ralph', 'Emerson', 4520986798, 'remerson93@gmail.com', 1),
('Henry', 'Thoreau', 6500387096, 'hdt49595@tds.net', 1);

-- The query to create the Pets table
CREATE OR REPLACE TABLE Pets (
    pet_id int(11) NOT NULL AUTO_INCREMENT,
    pet_name varchar(255),
    species varchar(255) NOT NULL,
    breed varchar(255),
    sex char(1) NOT NULL,
    weight decimal(19, 2) NOT NULL,
    age int(3) NOT NULL,
    age_unit char(1) NOT NULL,
    PRIMARY KEY (pet_id)
);

-- populate with sample data
INSERT INTO Pets (pet_name, species, breed, sex, weight, age, age_unit)
VALUES ('Rex', 'Dog', 'Labrador Retriever', 'Male', 35.00, 1, 'Y'),
('Max', 'Dog', NULL, 'Male', 15.00, 13, 'Y'),
(NULL, 'Cat', 'Egyptian', 'Female', 10.00, 5, 'Y'),
('Buck', 'Dog', 'Boxer', 'Male', 40.00, 4, 'Y'),
('Lilac', 'Dog', 'Labradoodle', 'Female', 20.00, 8, 'M');

-- The query to create the Owners table
CREATE OR REPLACE TABLE Owners (
    owner_id int(11) NOT NULL AUTO_INCREMENT,
    customer_id int(11) NOT NULL,
    pet_id int(11) NOT NULL,
    PRIMARY KEY (owner_id),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
    ON DELETE CASCADE,
    FOREIGN KEY (pet_id) REFERENCES Pets(pet_id)
    ON DELETE CASCADE
);

-- populate with sample data
INSERT INTO Owners (customer_id, pet_id)
VALUES (1, 1),
(1, 2),
(2, 3),
(3, 4),
(4, 5);

-- The query to create the Orders table
CREATE OR REPLACE TABLE Orders (
    order_id int(11) NOT NULL AUTO_INCREMENT,
    service_id int(11) NOT NULL,
    customer_id int(11) NOT NULL,
    pet_id int(11) NOT NULL,
    discount_percent int(3) DEFAULT 0,
    total decimal(19, 2) NOT NULL,
    appointment_date date NOT NULL,
    date date NOT NULL DEFAULT CURRENT_DATE(),
    PRIMARY KEY (order_id),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
    ON DELETE CASCADE,
    FOREIGN KEY (pet_id) REFERENCES Pets(pet_id)
    ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES Services(service_id)
);

-- populate with sample data
INSERT INTO Orders (service_id, customer_id, pet_id, discount_percent, total, appointment_date, date)
VALUES (1, 1, 1, DEFAULT, 40.00, '2022-12-03', '2022-10-27'),
(1, 1, 2, 50, 20.00, '2022-12-08', '2022-10-25'),
(2, 2, 3, DEFAULT, 30.00, '2022-11-17', '2022-10-17'),
(3, 3, 4, 25, 45.00, '2022-11-03', '2022-10-07'),
(4, 4, 5, DEFAULT, 80.00, '2022-12-14', '2022-09-27');


SET FOREIGN_KEY_CHECKS = 1;
COMMIT;