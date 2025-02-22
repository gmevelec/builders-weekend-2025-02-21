{{
    config(
        name = "get_all_tmp_words",
        connection = "LOCAL_POSTGRES"
    )
}}

select
    *
from
    tmp_words

