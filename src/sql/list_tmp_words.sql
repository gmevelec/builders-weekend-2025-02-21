{{
    config(
        name = "list_tmp_words",
        connection = "LOCAL_POSTGRES"
    )
}}

select
    value
from
    tmp_words

