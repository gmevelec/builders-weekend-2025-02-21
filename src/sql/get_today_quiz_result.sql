{{
    config(
        name = "get_today_quiz_result",
        connection = "LOCAL_POSTGRES"
    )
}}

SELECT
    *
FROM
    quiz_results
WHERE
    DATE(date) = CURRENT_DATE
