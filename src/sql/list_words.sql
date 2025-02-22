{{
    config(
        name = "list_words",
        connection = "LOCAL_POSTGRES"
    )
}}

select
   w.word,
   w.translation,
   e.example
from
    words w
join examples e on e.word_id = w.id
