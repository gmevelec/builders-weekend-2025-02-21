{{
    config(
        name = "get_word",
        connection = "LOCAL_POSTGRES"
    )
}}

select
    Word as word,
    Translation as translation
from
    words
where
    word = 'Bread'
