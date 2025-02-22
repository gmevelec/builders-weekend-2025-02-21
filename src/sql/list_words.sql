{{
    config(
        name = "list_words",
        connection = "LOCAL_POSTGRES"
    )
}}

select
    w.*,
    e.example
from
    words w
join examples e on e.word_id = w.id
order by w.date_added desc
