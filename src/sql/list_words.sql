{{
    config(
        name = "list_words",
        connection = "LOCAL_POSTGRES"
    )
}}

select
    Word as word,
    Translation as translation
from
    words
