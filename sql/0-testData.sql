-- Active: 1700479430552@@127.0.0.1@5435@postgres

-- CREATE TABLE
--     "gender" (
--         "id" serial PRIMARY KEY,
--         "name" varchar(16)
--     );

-- CREATE TABLE
--     "citizenship" (
--         "id" serial PRIMARY KEY,
--         "name" varchar(8)
--     );

-- CREATE TABLE
--     "candidate" (
--         "id" uuid PRIMARY KEY,
--         "first_name" varchar NOT NULL,
--         "last_name" varchar NOT NULL,
--         "gender_id" integer NOT NULL REFERENCES gender(id),
--         "citizenship_id" integer NOT NULL REFERENCES citizenship(id),
--         "phone" varchar,
--         "email" varchar UNIQUE NOT NULL,
--         "photo" bytea,
--         "cv" bytea,
--         "bio" text,
--         "password" varchar NOT NULL,
--         "address" uuid NOT NULL
--     );

INSERT INTO gender(name) values ('F'), ('M');

INSERT INTO citizenship(name) values ('Melle'), ('Mme'), ('Mr');

INSERT INTO
    candidate(
        id,
        first_name,
        last_name,
        gender_id,
        citizenship_id,
        phone,
        email,
        photo,
        cv,
        bio,
        password,
        address_id
    )
values (
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        'John',
        'Doe',
        1,
        1,
        '0123456789',
        'john@doe.com',
        null,
        null,
        'Hello there!',
        'password',
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'
    )