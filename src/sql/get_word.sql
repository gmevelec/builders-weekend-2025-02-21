{{
    config(
        name = "get_word",
        connection = "LOCAL_POSTGRES"
    )
}}

select
    *
from
    words
where
    word = '{{ word }}'
