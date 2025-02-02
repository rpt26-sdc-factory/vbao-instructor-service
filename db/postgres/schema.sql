CREATE SCHEMA IF NOT EXISTS coursera;

CREATE TABLE IF NOT EXISTS coursera.instructor_details(
  instructor_id SERIAL PRIMARY KEY,
  firstname text NOT NULL,
  middleinitial text,
  lastname text NOT NULL,
  academic_title text,
  title text,
  organization text,
  learners int,
  instructor_avg_rating text,
  num_ratings int
);

CREATE TABLE IF NOT EXISTS coursera.assistant_instructors(
  assistant_id SERIAL PRIMARY KEY,
  course_id int,
  instructor_id int
);

CREATE TABLE IF NOT EXISTS coursera.primary_instructors(
  course_id int PRIMARY KEY NOT NULL,
  instructor_id int
);

CREATE SCHEMA IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS test.instructor_details(
  instructor_id SERIAL PRIMARY KEY,
  firstname text NOT NULL,
  middleinitial text,
  lastname text NOT NULL,
  academic_title text,
  title text,
  organization text,
  learners int,
  instructor_avg_rating text,
  num_ratings int
);

CREATE TABLE IF NOT EXISTS test.assistant_instructors(
  assistant_id SERIAL PRIMARY KEY,
  course_id int,
  instructor_id int
);

CREATE TABLE IF NOT EXISTS test.primary_instructors(
  course_id int PRIMARY KEY NOT NULL,
  instructor_id int
);
