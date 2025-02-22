{{
    config(
        name = "get_tmp_word",
        connection = "LOCAL_POSTGRES"
    )
}}

select
    *
from
    tmp_words
where
    id = '{{ id }}'

