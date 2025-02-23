{{
    config(
        name = "get_next_quiz",
        connection = "LOCAL_POSTGRES"
    )
}}

WITH NextQuiz AS (
    SELECT
        qc.id AS quiz_coming_id,
        qc.due_date,
        w.id AS word_id,
        w.word,
        w.translation,
        w.date_added
    FROM
        quiz_coming qc
    JOIN
        words w ON qc.word_id = w.id
    WHERE
        qc.due_date <= CURRENT_DATE
    ORDER BY
        qc.due_date ASC, qc.id ASC
    LIMIT 1
)
SELECT
    n.quiz_coming_id,
    n.due_date,
    n.word_id,
    n.word,
    n.translation,
    n.date_added,
    e.id AS example_id,
    e.example
FROM
    NextQuiz n
        LEFT JOIN
    examples e ON n.word_id = e.word_id
ORDER BY
    e.id ASC
