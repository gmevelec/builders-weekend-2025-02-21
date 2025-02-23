import morph
from morph import MorphGlobalContext
import pandas as pd
from morph_lib.database import insert_records, delete_records, execute_sql
from datetime import datetime, timedelta

@morph.func
@morph.load_data("get_next_quiz")
def get_question(context: MorphGlobalContext):
    df = context.vars['get_next_quiz']
    return df

@morph.func
@morph.variables("id", required=True, type="int")
def quiz_wrong(context: MorphGlobalContext):
    id = context.vars['id']
    data = {"id": [id]}
    query = f"SELECT * FROM quiz_coming WHERE id = '{id}';"
    res = execute_sql(query, "LOCAL_POSTGRES")
    word_id = res.at[0, 'id']
    quiz_result = {
        "word_id": [word_id],
        "result": ["FAILED"]
    }
    quiz_result_df = pd.DataFrame(quiz_result)
    insert_records(quiz_result_df, "quiz_results", "LOCAL_POSTGRES")
    quiz_coming = {
        "word_id": [word_id],
        "due_date": [datetime.now().date()]
    }
    quiz_coming_df = pd.DataFrame(quiz_coming)
    insert_records(quiz_coming_df, "quiz_coming", "LOCAL_POSTGRES")
    df = pd.DataFrame(data)
    delete_records(
        df,
        ["id"],
        "quiz_coming",
        "LOCAL_POSTGRES"
    )

@morph.func
@morph.variables("id", required=True, type="int")
def quiz_success(context: MorphGlobalContext):
    id = context.vars['id']
    data = {"id": [id]}
    query = f"SELECT * FROM quiz_coming WHERE id = '{id}';"
    res = execute_sql(query, "LOCAL_POSTGRES")
    word_id = res.at[0, 'id']
    quiz_result = {
        "word_id": [word_id],
        "result": ["SUCCESS"]
    }
    quiz_result_df = pd.DataFrame(quiz_result)
    insert_records(quiz_result_df, "quiz_results", "LOCAL_POSTGRES")
    quiz_coming = {
        "word_id": [word_id],
        "due_date": [datetime.now().date() + timedelta(days=1)]
    }
    quiz_coming_df = pd.DataFrame(quiz_coming)
    insert_records(quiz_coming_df, "quiz_coming", "LOCAL_POSTGRES")
    df = pd.DataFrame(data)
    delete_records(
        df,
        ["id"],
        "quiz_coming",
        "LOCAL_POSTGRES"
    )

