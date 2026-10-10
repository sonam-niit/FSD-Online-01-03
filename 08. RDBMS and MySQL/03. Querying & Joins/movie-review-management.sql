
CREATE DATABASE movie_review_management;

USE movie_review_management;


CREATE TABLE Genres (
    genre_id INT PRIMARY KEY AUTO_INCREMENT,
    genre_name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    country VARCHAR(60),
    join_date DATE NOT NULL
);

CREATE TABLE Directors (
    director_id INT PRIMARY KEY AUTO_INCREMENT,
    director_name VARCHAR(100) NOT NULL,
    country VARCHAR(60),
    birth_date DATE
);

CREATE TABLE Movies (
    movie_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    release_year YEAR NOT NULL,
    genre_id INT NOT NULL,
    director_id INT NOT NULL,
    duration_minutes INT NOT NULL,
    language VARCHAR(40) NOT NULL,
    budget_millions DECIMAL(10,2),
    box_office_millions DECIMAL(10,2),
    age_rating VARCHAR(10),
    FOREIGN KEY (genre_id)
        REFERENCES Genres(genre_id),
    FOREIGN KEY (director_id)
        REFERENCES Directors(director_id)
);

CREATE TABLE Reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    movie_id INT NOT NULL,
    rating DECIMAL(3,1) NOT NULL,
    review_text VARCHAR(500),
    review_date DATE NOT NULL,
    is_spoiler BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (user_id)
        REFERENCES Users(user_id),
    FOREIGN KEY (movie_id)
        REFERENCES Movies(movie_id),
    CHECK (rating >= 1.0 AND rating <= 10.0),
    UNIQUE (user_id, movie_id)
);

CREATE TABLE Watchlist (
    watchlist_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    movie_id INT NOT NULL,
    added_date DATE NOT NULL,
    watched BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (user_id)
        REFERENCES Users(user_id),
    FOREIGN KEY (movie_id)
        REFERENCES Movies(movie_id),
    UNIQUE (user_id, movie_id)
);


INSERT INTO Genres (genre_name) VALUES
('Action'),
('Drama'),
('Comedy'),
('Science Fiction'),
('Thriller'),
('Animation'),
('Romance'),
('Adventure');


INSERT INTO Users
(username, full_name, email, country, join_date)
VALUES
('filmfan_amit', 'Amit Sharma', 'amit@example.com', 'India', '2024-01-15'),
('priya_reviews', 'Priya Patel', 'priya@example.com', 'India', '2024-02-20'),
('rahul_cine', 'Rahul Verma', 'rahul@example.com', 'India', '2024-03-05'),
('neha_watches', 'Neha Iyer', 'neha@example.com', 'India', '2024-04-12'),
('james_moviebuff', 'James Wilson', 'james@example.com', 'United Kingdom', '2023-11-02'),
('sophia_screen', 'Sophia Brown', 'sophia@example.com', 'United States', '2023-12-18'),
('li_critic', 'Li Wei', 'li@example.com', 'Singapore', '2024-05-22'),
('maria_cinema', 'Maria Garcia', 'maria@example.com', 'Spain', '2024-06-09'),
('arjun_films', 'Arjun Mehta', 'arjun@example.com', 'India', '2024-07-14'),
('emma_reviews', 'Emma Taylor', 'emma@example.com', 'Australia', '2024-08-01'),
('noah_movies', 'Noah Davis', 'noah@example.com', 'United States', '2024-09-11'),
('zara_filmnotes', 'Zara Khan', 'zara@example.com', 'Pakistan', '2024-10-03');


INSERT INTO Directors
(director_name, country, birth_date)
VALUES
('Christopher Nolan', 'United Kingdom', '1970-07-30'),
('Greta Gerwig', 'United States', '1983-08-04'),
('S. S. Rajamouli', 'India', '1973-10-10'),
('Denis Villeneuve', 'Canada', '1967-10-03'),
('Pete Docter', 'United States', '1968-10-09'),
('Zoya Akhtar', 'India', '1972-10-14'),
('Bong Joon-ho', 'South Korea', '1969-09-14'),
('Rohit Shetty', 'India', '1973-03-14'),
('Rian Johnson', 'United States', '1973-12-17'),
('Taika Waititi', 'New Zealand', '1975-08-16');


INSERT INTO Movies
(title, release_year, genre_id, director_id,
 duration_minutes, language, budget_millions,
 box_office_millions, age_rating)
VALUES
('Inception', 2010, 4, 1, 148, 'English', 160, 839, 'PG-13'),
('The Dark Knight', 2008, 1, 1, 152, 'English', 185, 1005, 'PG-13'),
('Interstellar', 2014, 4, 1, 169, 'English', 165, 731, 'PG-13'),
('Barbie', 2023, 3, 2, 114, 'English', 145, 1446, 'PG-13'),
('Little Women', 2019, 2, 2, 135, 'English', 40, 218, 'PG'),
('RRR', 2022, 1, 3, 187, 'Telugu', 72, 166, 'R'),
('Baahubali 2: The Conclusion', 2017, 8, 3, 167, 'Telugu', 40, 278, 'NR'),
('Dune: Part Two', 2024, 4, 4, 166, 'English', 190, 714, 'PG-13'),
('Arrival', 2016, 4, 4, 116, 'English', 47, 203, 'PG-13'),
('Inside Out', 2015, 6, 5, 95, 'English', 175, 858, 'PG'),
('Coco', 2017, 6, 5, 105, 'English', 175, 807, 'PG'),
('Gully Boy', 2019, 2, 6, 154, 'Hindi', 5, 25, 'R'),
('Parasite', 2019, 5, 7, 132, 'Korean', 11, 263, 'R'),
('Singham', 2011, 1, 8, 143, 'Hindi', 6, 21, 'PG-13'),
('Knives Out', 2019, 5, 9, 130, 'English', 40, 312, 'PG-13'),
('Jojo Rabbit', 2019, 3, 10, 108, 'English', 14, 90, 'PG-13'),
('The Grand Budapest Hotel', 2014, 3, 10, 99, 'English', 25, 174, 'R'),
('The Notebook', 2004, 7, 6, 123, 'English', 29, 118, 'PG-13'),
('The Martian', 2015, 8, 4, 144, 'English', 108, 630, 'PG-13'),
('Drishyam', 2015, 5, 8, 163, 'Hindi', 2, 15, 'PG-13');


INSERT INTO Reviews
(user_id, movie_id, rating, review_text, review_date, is_spoiler)
VALUES
(1, 1, 9.0, 'Clever story and excellent visuals.', '2024-01-20', FALSE),
(2, 1, 8.5, 'Complex but rewarding.', '2024-02-25', FALSE),
(3, 1, 9.5, 'One of my favourite science fiction films.', '2024-03-11', FALSE),
(4, 2, 9.0, 'A gripping superhero crime drama.', '2024-04-15', FALSE),
(5, 2, 9.5, 'Outstanding performances.', '2024-01-05', FALSE),
(6, 3, 9.0, 'Emotional and ambitious.', '2024-02-02', FALSE),
(7, 3, 8.0, 'Great soundtrack and ideas.', '2024-05-25', FALSE),
(8, 4, 8.0, 'Funny and thoughtful.', '2024-06-12', FALSE),
(9, 4, 7.5, 'Colourful with a strong message.', '2024-07-20', FALSE),
(10, 5, 8.5, 'A warm and moving adaptation.', '2024-08-10', FALSE),
(1, 6, 9.0, 'Spectacular action sequences.', '2024-02-01', FALSE),
(2, 6, 8.5, 'Entertaining from beginning to end.', '2024-03-01', FALSE),
(3, 7, 8.0, 'Grand scale and memorable scenes.', '2024-03-15', FALSE),
(4, 8, 9.0, 'Immersive world building.', '2024-04-20', FALSE),
(5, 8, 8.5, 'A powerful cinematic experience.', '2024-05-04', FALSE),
(6, 9, 8.0, 'Thought-provoking and moving.', '2024-06-21', FALSE),
(7, 10, 9.0, 'Creative and emotionally intelligent.', '2024-07-01', FALSE),
(8, 11, 9.0, 'Beautiful music and storytelling.', '2024-07-15', FALSE),
(9, 12, 8.0, 'Strong performances and music.', '2024-08-01', FALSE),
(10, 13, 9.5, 'A brilliant and unpredictable thriller.', '2024-08-14', FALSE),
(11, 13, 9.0, 'Carefully constructed story.', '2024-09-18', TRUE),
(12, 14, 7.0, 'An entertaining action film.', '2024-10-05', FALSE),
(1, 15, 8.5, 'A fun mystery with great twists.', '2024-09-10', FALSE),
(2, 15, 8.0, 'Enjoyed the ensemble cast.', '2024-09-15', FALSE),
(3, 16, 8.0, 'Dark humour and heart.', '2024-09-22', FALSE),
(4, 17, 8.5, 'Beautiful production design.', '2024-09-25', FALSE),
(5, 18, 8.5, 'A classic romance.', '2024-09-28', FALSE),
(6, 19, 7.5, 'A smart survival story.', '2024-10-02', FALSE),
(7, 20, 8.0, 'An engaging mystery.', '2024-10-06', FALSE),
(8, 1, 8.0, 'Interesting ideas and strong pacing.', '2024-10-08', FALSE),
(9, 2, 9.0, 'Still holds up very well.', '2024-10-09', FALSE),
(10, 6, 9.5, 'An unforgettable action epic.', '2024-10-10', FALSE),
(11, 4, 7.0, 'Enjoyable, though not for everyone.', '2024-10-11', FALSE),
(12, 8, 8.5, 'Visually impressive.', '2024-10-12', FALSE),
(1, 13, 9.0, 'Excellent social thriller.', '2024-10-13', FALSE),
(2, 20, 7.5, 'Good suspense and performances.', '2024-10-14', FALSE);


INSERT INTO Watchlist
(user_id, movie_id, added_date, watched)
VALUES
(1, 8, '2024-09-01', FALSE),
(1, 13, '2024-09-05', TRUE),
(2, 3, '2024-09-07', FALSE),
(2, 19, '2024-09-10', FALSE),
(3, 4, '2024-09-12', TRUE),
(3, 17, '2024-09-15', FALSE),
(4, 1, '2024-09-17', TRUE),
(4, 15, '2024-09-20', FALSE),
(5, 6, '2024-09-22', FALSE),
(5, 10, '2024-09-25', TRUE),
(6, 7, '2024-09-27', FALSE),
(6, 20, '2024-09-30', FALSE),
(7, 2, '2024-10-01', TRUE),
(7, 16, '2024-10-02', FALSE),
(8, 5, '2024-10-03', FALSE),
(8, 11, '2024-10-04', TRUE),
(9, 9, '2024-10-05', FALSE),
(9, 14, '2024-10-06', FALSE),
(10, 12, '2024-10-07', TRUE),
(11, 18, '2024-10-08', FALSE),
(12, 1, '2024-10-09', FALSE),
(12, 13, '2024-10-10', TRUE);

-- Verify Db created Successfully or not

SHOW TABLES;

SELECT COUNT(*) AS total_genres FROM Genres;
SELECT COUNT(*) AS total_users FROM Users;
SELECT COUNT(*) AS total_directors FROM Directors;
SELECT COUNT(*) AS total_movies FROM Movies;
SELECT COUNT(*) AS total_reviews FROM Reviews;
SELECT COUNT(*) AS total_watchlist_entries FROM Watchlist;

