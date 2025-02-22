import morph
from morph import MorphGlobalContext
import pandas as pd
from morph_lib.database import insert_records, delete_records, execute_sql

@morph.func
@morph.load_data("get_last_tmp_word")
@morph.load_data("get_word")
def save_last(context: MorphGlobalContext):
    df = context.data["get_last_tmp_word"]
    lines = df.value[0].split("\n")
    word = lines[0]
    translation = lines[1]
    create_word(word, translation)
    word_id = get_word_id(word)
    example_sentences = lines[2:5]
    create_word_examples(word_id, example_sentences)
    delete_records(
        df,
        ["id"],
        "tmp_words",
        "LOCAL_POSTGRES"
    )

@morph.func
@morph.load_data("get_all_tmp_words")
@morph.load_data("get_word")
def save_all(context: MorphGlobalContext):
    df = context.data["get_all_tmp_words"]
    for index, row in df.iterrows():
        lines = row.value.split("\n")
        word = lines[0]
        translation = lines[1]
        create_word(word, translation)
        word_id = get_word_id(word)
        example_sentences = lines[2:5]
        create_word_examples(word_id, example_sentences)
    delete_records(
        df,
        ["id"],
        "tmp_words",
        "LOCAL_POSTGRES"
    )
def create_word(word, translation):
    wordsData = {
        "word": [word],
        "translation": [translation],
    }
    wordsDf = pd.DataFrame(wordsData)
    insert_records(
        wordsDf,
        "words",
        "LOCAL_POSTGRES"
    )

def get_word_id(word):
    query = f"SELECT * FROM words WHERE word = '{word}';"
    res = execute_sql(query, "LOCAL_POSTGRES")
    return res.at[0, 'id']

def create_word_examples(word_id, example_sentences):
    examplesData = {
        "example": example_sentences,
        "word_id": word_id,
    }
    exampleDf = pd.DataFrame(examplesData)
    insert_records(
        exampleDf,
        "examples",
        "LOCAL_POSTGRES"
    )
