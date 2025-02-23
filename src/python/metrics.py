import morph
from morph import MorphGlobalContext
from morph_lib.types import HtmlResponse
import pandas as pd
import plotly.express as px

@morph.func
@morph.load_data("quiz_result_metrics")
def quiz_metrics(context: MorphGlobalContext):
    df = context.data["quiz_result_metrics"]
    # Extract scalar values from the DataFrame
    total_count = df["total_count"].iloc[0]
    success_count = df["success_count"].iloc[0]
    failed_count = df["failed_count"].iloc[0]
    success_count_today = df["success_count_today"].iloc[0]
    failed_count_today = df["failed_count_today"].iloc[0]

    # Create the result DataFrame
    result_df = pd.DataFrame(
        [
            {"label": "Total count", "value": total_count},
            {"label": "Total Success", "value": success_count},
            {"label": "Total Failed", "value": failed_count},
            {"label": "Today Success", "value": success_count_today},
            {"label": "Today Failed", "value": failed_count_today},
        ]
    )
    return result_df


@morph.func
@morph.load_data("list_words")
def metrics_learned_words(context: MorphGlobalContext):
    df = context.data["list_words"]
    print(df)
    df['date_added'] = pd.to_datetime(df['date_added'])
    df['date'] = df['date_added'].dt.date
    words_by_date = df.groupby('date').size().reset_index(name='count')
    fig = px.bar(words_by_date, x='date', y='count', title='Number of Words Added by Date', barmode="stack")
    print(fig)
    return HtmlResponse(fig.to_html())

@morph.func
@morph.load_data("list_words")
def metrics_learned_words(context: MorphGlobalContext):
    df = context.data["list_words"]
    df['date_added'] = pd.to_datetime(df['date_added'])
    df['day'] = df['date_added'].dt.strftime('%Y/%m/%d')
    words_by_date = df.groupby('day').size().reset_index(name='count')
    fig = px.line(words_by_date, x='day', y='count', title='Number of Words Added by Date')
    return HtmlResponse(fig.to_html())

@morph.func
@morph.load_data("get_all_quiz_result")
def metrics_quiz_results_by_day(context: MorphGlobalContext):
    df = context.data["get_all_quiz_result"]
    df['date'] = pd.to_datetime(df['date'])
    df['day'] = df['date'].dt.strftime('%Y/%m/%d')
    words_by_date = df.groupby('day').size().reset_index(name='count')
    fig = px.bar(words_by_date, x='day', y='count', title='Number of Words studied', barmode="stack")
    return HtmlResponse(fig.to_html())

@morph.func
@morph.load_data("get_today_quiz_result")
def metrics_quiz_today_results(context: MorphGlobalContext):
    df = context.data["get_today_quiz_result"]
    df['date'] = pd.to_datetime(df['date'])
    df['day'] = df['date'].dt.strftime('%Y/%m/%d')
    grouped_df = df.groupby(['day', 'result']).size().unstack(fill_value=0).reset_index()
    if grouped_df.empty:
        return HtmlResponse("<p>No quiz results for today.</p>")
    fig = px.bar(
        grouped_df,
        x='day',
        y=['SUCCESS', 'FAILED'],
        labels={'variable': 'Result', 'value': 'Count'},
        color_discrete_map={'SUCCESS': 'green', 'FAILED': 'red'},
        barmode='group'  # Ensures bars are grouped side by side
    )
    return HtmlResponse(fig.to_html())
