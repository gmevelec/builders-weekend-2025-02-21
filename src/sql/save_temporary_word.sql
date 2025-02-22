{{
    config(
        name = "get_word",
        connection = "DUCKDB"
    )
}}

select
    Word as word,
    Translation as translation
from
    read_csv_auto("./data/words.csv")
where
    word = 'Bread'
