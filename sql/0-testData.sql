-- Active: 1700479430552@@127.0.0.1@5435@postgres

CREATE TABLE
    "gender" (
        "id" serial PRIMARY KEY,
        "name" varchar(16)
    );

CREATE TABLE
    "citizenship" (
        "id" serial PRIMARY KEY,
        "name" varchar(8)
    );

CREATE TABLE
    "candidate" (
        "id" uuid PRIMARY KEY,
        "first_name" varchar NOT NULL,
        "last_name" varchar NOT NULL,
        "gender_id" integer NOT NULL REFERENCES gender(id),
        "citizenship_id" integer NOT NULL REFERENCES citizenship(id),
        "phone" varchar,
        "email" varchar UNIQUE NOT NULL,
        "photo" bytea,
        "cv" bytea,
        "bio" text,
        "password" varchar NOT NULL,
        "address" uuid NOT NULL
    );

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
    ), (
        'b1f47923-7c5e-4a86-ba7d-7f524d8b492a',
        'Alice',
        'Smith',
        1,
        1,
        '9876543210',
        'alice@smith.com',
        null,
        null,
        'Nice to meet you!',
        'password',
        'b1f47923-7c5e-4a86-ba7d-7f524d8b492a'
    ), (
        'c2d584c1-6a1b-4a3e-8a49-8c5863d66a21',
        'Bob',
        'Johnson',
        2,
        2,
        '5551234567',
        'bob@johnson.com',
        null,
        null,
        'Greetings!',
        'password',
        'c2d584c1-6a1b-4a3e-8a49-8c5863d66a21'
    );

INSERT INTO
    reference(
        id,
        title,
        rating,
        comment
,
            candidate_id,
            recruiter_id
    )
VALUES (
        '2e2f6630-8ee7-48d4-9926-ebcf100935b4',
        'Reference 1',
        4,
        'Positive experience with the candidate.',
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        'a1b2c3d4-1234-5678-9012-abcdef123456'
    ), (
        '30e6dbc7-21fc-4553-843d-ace778fd881b',
        'Reference 2',
        3,
        'Good communication skills.',
        'b1f47923-7c5e-4a86-ba7d-7f524d8b492a',
        'b2c3d4e5-1234-5678-9012-abcdef123456'
    ), (
        '5ce34791-6650-45e1-9e20-3f837677ee33',
        'Reference 3',
        5,
        'Highly recommended candidate.',
        'c2d584c1-6a1b-4a3e-8a49-8c5863d66a21',
        'a1b2c3d4-1234-5678-9012-abcdef123456'
    ), (
        '0f91cdfe-fb50-482b-9e1e-1ee4a37a19d3',
        'Reference 4',
        4,
        'Skilled in problem-solving.',
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        'b2c3d4e5-1234-5678-9012-abcdef123456'
    ), (
        '17e761ba-ecf5-4e1f-82de-ec2b6928b918',
        'Reference 5',
        3,
        'Adaptable to new challenges.',
        'b1f47923-7c5e-4a86-ba7d-7f524d8b492a',
        'a1b2c3d4-1234-5678-9012-abcdef123456'
    ), (
        '56b9f1a8-ce12-4a35-a3df-34707e7cd845',
        'Reference 6',
        5,
        'Exceptional problem-solving skills.',
        'c2d584c1-6a1b-4a3e-8a49-8c5863d66a21',
        'b2c3d4e5-1234-5678-9012-abcdef123456'
    );