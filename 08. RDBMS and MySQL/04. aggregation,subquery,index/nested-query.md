# Nested Queries

```sql

USE movie_review_management;

-- Find the highest rated movie by average rating

SELECT
    m.title,
    AVG(r.rating) AS average_rating
FROM movies m
INNER JOIN reviews r
    ON m.movie_id = r.movie_id
GROUP BY
    m.movie_id,
    m.title
HAVING round(average_rating,5) = (
    SELECT MAX(movie_avg)
    FROM (
        SELECT round(avg(rating),5) AS movie_avg
        FROM reviews
        GROUP BY movie_id
    ) AS averages
);

```