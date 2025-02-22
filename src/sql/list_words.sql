{{
    config(
        name = "list_words",
        connection = "DUCKDB"
    )
}}

select
    Word as word,
    Translation as translation
from
    read_csv_auto("./data/words.csv")
