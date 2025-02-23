{{
    config(
        name = "quiz_result_metrics",
        connection = "LOCAL_POSTGRES"
    )
}}

SELECT
    COUNT(*) AS total_count,
    SUM(CASE WHEN result = 'SUCCESS' THEN 1 ELSE 0 END) AS success_count,
    SUM(CASE WHEN result = 'FAILED' THEN 1 ELSE 0 END) AS failed_count,
    SUM(CASE WHEN result = 'SUCCESS' AND DATE(date) = CURRENT_DATE THEN 1 ELSE 0 END) AS success_count_today,
    SUM(CASE WHEN result = 'FAILED' AND DATE(date) = CURRENT_DATE THEN 1 ELSE 0 END) AS failed_count_today
FROM
    quiz_results
