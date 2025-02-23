{{
    config(
        name = "get_all_quiz_result",
        connection = "LOCAL_POSTGRES"
    )
}}

SELECT
    *
FROM
    quiz_results
