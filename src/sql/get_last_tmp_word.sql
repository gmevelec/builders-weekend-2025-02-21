{{
    config(
        name = "get_last_tmp_word",
        connection = "LOCAL_POSTGRES"
    )
}}

select
    *
from
    tmp_words
order by id desc
limit 1
