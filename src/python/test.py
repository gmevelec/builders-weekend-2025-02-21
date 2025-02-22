import morph
from morph import MorphGlobalContext
import os
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from morph_lib.stream import stream_chat
from morph_lib.database import insert_records
import pandas as pd

@morph.func
@morph.load_data("list_tmp_words")
def get_tmp_words(context: MorphGlobalContext):
    df = context.data["list_tmp_words"]
    return df

@morph.func
@morph.load_data("list_words")
def test_words(context: MorphGlobalContext):
    df = context.data["list_words"]
    return df

@morph.func
def test_translate(context: MorphGlobalContext):
    search = context.vars["prompt"]
    chat = ChatGroq(temperature=0, model_name="llama-3.2-3b-preview")
    system = (
        "You are a fast and efficient translator in English-Japanese. Respond ONLY with the word in English, "
        "its Japanese translation, and 3 example sentences in Japanese. Do not include any explanations or extra text."
    )
    human = (
        f"Translate the following in Japanese: {search} and give me 3 sentence examples that are useful and natural in Japanese. Use \n\n for line breaks"
        "Use kanji if this is the common usage"
        "Use EXACTLY the following format:"
        "Word in English IMPORTANT line break"
        "Translation in Japanese IMPORTANT line break"
        "Example sentence 1 in Japanese IMPORTANT line break"
        "Example sentence 2 in Japanese IMPORTANT line break"
        "Example sentence 3 in Japanese"
    )
    prompt = ChatPromptTemplate.from_messages([("system", system), ("human", human)])
    chain = prompt | chat
    buffer = ""
    for chunk in chain.stream({"topic": search}):
        yield stream_chat(chunk.content)
        buffer += chunk.content
    data = {"value": buffer}
    # df = pd.DataFrame(data)
    # insert_records(
    #     df,
    #     "tmp_words",
    #     "LOCAL_POSTGRES"
    # )
