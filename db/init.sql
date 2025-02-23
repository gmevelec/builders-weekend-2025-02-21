-- Create the tmp_words table
CREATE TABLE IF NOT EXISTS tmp_words (
                                         id SERIAL PRIMARY KEY,
                                         value VARCHAR(255) NOT NULL
    );

-- Create the words table
CREATE TABLE IF NOT EXISTS words (
                                     id SERIAL PRIMARY KEY,
                                     word VARCHAR(255) NOT NULL,
    translation VARCHAR(255) NOT NULL,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- Create the quiz_results table
CREATE TABLE IF NOT EXISTS quiz_results (
                                            id SERIAL PRIMARY KEY,
                                            result VARCHAR(50) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    word_id INTEGER NOT NULL,
    FOREIGN KEY (word_id) REFERENCES words(id)
    );

-- Create the quiz_coming table
CREATE TABLE IF NOT EXISTS quiz_coming (
                                           id SERIAL PRIMARY KEY,
                                           due_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                           word_id INTEGER NOT NULL,
                                           FOREIGN KEY (word_id) REFERENCES words(id)
    );

-- Create the examples table
CREATE TABLE IF NOT EXISTS examples (
                                        id SERIAL PRIMARY KEY,
                                        example VARCHAR(255) NOT NULL,
    word_id INTEGER NOT NULL,
    FOREIGN KEY (word_id) REFERENCES words(id)
    );

-- Insert 20 words with specific timestamps in the past 14 days
INSERT INTO words (word, translation, date_added) VALUES
                                                      ('Hello', 'こんにちは', '2025-02-10 10:00:00'),
                                                      ('Goodbye', 'さよなら', '2025-02-10 11:00:00'),
                                                      ('Thank you', 'ありがとうございます', '2025-02-10 12:00:00'),
                                                      ('Cat', '猫', '2025-02-11 13:00:00'),
                                                      ('Dog', '犬', '2025-02-11 14:00:00'),
                                                      ('Bird', '鳥', '2025-02-12 10:00:00'),
                                                      ('Sun', '太陽', '2025-02-12 11:00:00'),
                                                      ('Moon', '月', '2025-02-13 10:00:00'),
                                                      ('Star', '星', '2025-02-13 11:00:00'),
                                                      ('Tree', '木', '2025-02-14 10:00:00'),
                                                      ('Flower', '花', '2025-02-14 11:00:00'),
                                                      ('Rain', '雨', '2025-02-15 10:00:00'),
                                                      ('Snow', '雪', '2025-02-15 11:00:00'),
                                                      ('Cloud', '雲', '2025-02-16 10:00:00'),
                                                      ('Wind', '風', '2025-02-16 11:00:00'),
                                                      ('Sky', '空', '2025-02-17 10:00:00'),
                                                      ('Water', '水', '2025-02-17 11:00:00'),
                                                      ('Fire', '火', '2025-02-18 10:00:00'),
                                                      ('Earth', '土', '2025-02-18 11:00:00'),
                                                      ('Air', '空気', '2025-02-19 10:00:00'),
                                                      ('Food', '食べ物', '2025-02-19 11:00:00'),
                                                      ('Drink', '飲み物', '2025-02-20 10:00:00'),
                                                      ('House', '家', '2025-02-20 11:00:00'),
                                                      ('Car', '車', '2025-02-21 10:00:00'),
                                                      ('Bike', '自転車', '2025-02-21 11:00:00'),
                                                      ('Book', '本', '2025-02-22 10:00:00'),
                                                      ('Pen', 'ペン', '2025-02-22 11:00:00'),
                                                      ('Computer', 'コンピューター', '2025-02-22 16:00:00'),
                                                      ('Phone', '電話', '2025-02-22 17:00:00');

-- Insert example sentences for each word
INSERT INTO examples (example, word_id) VALUES
                                            ('こんにちは、元気ですか？', 1),
                                            ('こんにちは、お仕事はどうですか？', 1),
                                            ('こんにちは、今日の天気はいいですね。', 1),
                                            ('猫が庭を走り回っています。', 4),
                                            ('飼い猫は今昼寝をしています。', 4),
                                            ('新しい猫を家族に迎えました。', 4),
                                            ('さよなら、またね。', 2),
                                            ('良い旅を、さよなら。', 2),
                                            ('明日また会おう、さよなら。', 2),
                                            ('犬が公園で遊んでいます。', 5),
                                            ('犬は忠実な動物です。', 5),
                                            ('犬を散歩させています。', 5),
                                            ('鳥が空を飛んでいる。', 6),
                                            ('鳥のさえずりを聞きたいです。', 6),
                                            ('公園で鳥の餌やりをしました。', 6),
                                            ('太陽が昇ります。', 7),
                                            ('太陽は暑いです。', 7),
                                            ('今日は太陽がとても明るいです。', 7),
                                            ('月が昇ります。', 8),
                                            ('月は夜のガイドです。', 8),
                                            ('朝に月を見ることができます。', 8),
                                            ('星が夜の空に点在きます。', 9),
                                            ('星は美しいです。', 9),
                                            ('星座を見つけることができます。', 9),
                                            ('木が庭にあります。', 10),
                                            ('木は緑色です。', 10),
                                            ('庭の木が大きくなりました。', 10),
                                            ('花が咲きました。', 11),
                                            ('花は美しいです。', 11),
                                            ('公園で花を見賞しています。', 11),
                                            ('雨が降りました。', 12),
                                            ('雨は清々しいです。', 12),
                                            ('傘が必要です。', 12),
                                            ('雪が積みました。', 13),
                                            ('雪は白いです。', 13),
                                            ('雪だるまを作りました。', 13),
                                            ('雲が空にあります。', 14),
                                            ('雲は白いです。', 14),
                                            ('雲が形を変えることがあります。', 14),
                                            ('風が吹きます。', 15),
                                            ('風は涼しいです。', 15),
                                            ('風で葉が舞います。', 15),
                                            ('空が青いです。', 16),
                                            ('空は広く無限です。', 16),
                                            ('空で飛行機を見ることができます。', 16),
                                            ('水が流れています。', 17),
                                            ('水は透明です。', 17),
                                            ('水で花を育てています。', 17),
                                            ('火が燃えています。', 18),
                                            ('火は熱いです。', 18),
                                            ('火で料理を作ります。', 18),
                                            ('土が塗られています。', 19),
                                            ('土は固いです。', 19),
                                            ('土で植物を育てています。', 19),
                                            ('空気が清々しいです。', 20),
                                            ('空気が新鮮です。', 20),
                                            ('空気を吸って生きています。', 20),
                                            ('食べ物があります。', 21),
                                            ('食べ物は美味しいです。', 21),
                                            ('朝ごはんを食べました。', 21),
                                            ('飲み物があります。', 22),
                                            ('飲み物は爽やかです。', 22),
                                            ('朝に飲み物を飲みました。', 22),
                                            ('家があります。', 23),
                                            ('家は暖かいです。', 23),
                                            ('家の周りを散歩しています。', 23),
                                            ('車があります。', 24),
                                            ('車は速いです。', 24),
                                            ('車で友達を迎えに行きました。', 24),
                                            ('自転車があります。', 25),
                                            ('自転車は軽いです。', 25),
                                            ('自転車で公園を散歩しました。', 25),
                                            ('本があります。', 26),
                                            ('本は知識を教えてくれます。', 26),
                                            ('新しい本を読むことにしました。', 26),
                                            ('ペンがあります。', 27),
                                            ('ペンで書きましょう。', 27),
                                            ('新しいペンを買ったことがあります。', 27),
                                            ('コンピューターがあります。', 28),
                                            ('コンピューターは便利です。', 28),
                                            ('新しいソフトウェアをインストールしました。', 28),
                                            ('電話があります。', 29),
                                            ('電話で友達と話しました。', 29),
                                            ('新しい電話を買ったことがあります。', 29);

-- Generate quiz_results with an improving learning curve over 14 days
WITH RECURSIVE date_series AS (
    SELECT '2025-02-10 00:00:00'::timestamp AS date
UNION ALL
SELECT date + INTERVAL '1 day'
FROM date_series
WHERE date < '2025-02-23 23:59:59'
    ),
    word_series AS (
SELECT id, word, translation
FROM words
    ),
    random_quiz_results AS (
SELECT ds.date, ws.id AS word_id, CASE WHEN random() < 0.5 THEN 'SUCCESS' ELSE 'FAILED' END AS result
FROM date_series ds
    CROSS JOIN word_series ws
ORDER BY ds.date, ws.id
    LIMIT 200
    )
INSERT INTO quiz_results (date, word_id, result)
SELECT date, word_id, result
FROM random_quiz_results
ON CONFLICT DO NOTHING;

-- Update quiz_results to simulate an improving learning curve
UPDATE quiz_results
SET result = 'SUCCESS'
WHERE date >= '2025-02-15 00:00:00' AND date <= '2025-02-23 23:59:59' AND word_id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

UPDATE quiz_results
SET result = 'SUCCESS'
WHERE date >= '2025-02-16 00:00:00' AND date <= '2025-02-23 23:59:59' AND word_id IN (11, 12, 13, 14, 15, 16, 17, 18, 19, 20);

UPDATE quiz_results
SET result = 'SUCCESS'
WHERE date >= '2025-02-17 00:00:00' AND date <= '2025-02-23 23:59:59' AND word_id IN (21, 22, 23, 24, 25, 26, 27, 28, 29);

-- Insert values in quiz_coming with due_date in the past 14 days
INSERT INTO quiz_coming (due_date, word_id) VALUES
                                                ('2025-02-10 10:00:00', (SELECT id FROM words WHERE word = 'Hello')),
                                                ('2025-02-11 11:00:00', (SELECT id FROM words WHERE word = 'Goodbye')),
                                                ('2025-02-12 12:00:00', (SELECT id FROM words WHERE word = 'Thank you')),
                                                ('2025-02-13 13:00:00', (SELECT id FROM words WHERE word = 'Cat')),
                                                ('2025-02-14 14:00:00', (SELECT id FROM words WHERE word = 'Dog')),
                                                ('2025-02-15 15:00:00', (SELECT id FROM words WHERE word = 'Bird')),
                                                ('2025-02-16 16:00:00', (SELECT id FROM words WHERE word = 'Sun')),
                                                ('2025-02-17 17:00:00', (SELECT id FROM words WHERE word = 'Moon')),
                                                ('2025-02-18 18:00:00', (SELECT id FROM words WHERE word = 'Star')),
                                                ('2025-02-19 19:00:00', (SELECT id FROM words WHERE word = 'Tree')),
                                                ('2025-02-20 20:00:00', (SELECT id FROM words WHERE word = 'Flower')),
                                                ('2025-02-21 21:00:00', (SELECT id FROM words WHERE word = 'Rain')),
                                                ('2025-02-22 22:00:00', (SELECT id FROM words WHERE word = 'Snow')),
                                                ('2025-02-23 23:00:00', (SELECT id FROM words WHERE word = 'Cloud')),
                                                ('2025-02-14 10:00:00', (SELECT id FROM words WHERE word = 'Wind')),
                                                ('2025-02-15 11:00:00', (SELECT id FROM words WHERE word = 'Sky')),
                                                ('2025-02-16 12:00:00', (SELECT id FROM words WHERE word = 'Water')),
                                                ('2025-02-17 13:00:00', (SELECT id FROM words WHERE word = 'Fire')),
                                                ('2025-02-18 14:00:00', (SELECT id FROM words WHERE word = 'Earth')),
                                                ('2025-02-19 15:00:00', (SELECT id FROM words WHERE word = 'Air')),
                                                ('2025-02-20 16:00:00', (SELECT id FROM words WHERE word = 'Food')),
                                                ('2025-02-21 17:00:00', (SELECT id FROM words WHERE word = 'Drink')),
                                                ('2025-02-22 18:00:00', (SELECT id FROM words WHERE word = 'House')),
                                                ('2025-02-23 19:00:00', (SELECT id FROM words WHERE word = 'Car')),
                                                ('2025-02-24 20:00:00', (SELECT id FROM words WHERE word = 'Bike')),
                                                ('2025-02-25 21:00:00', (SELECT id FROM words WHERE word = 'Book')),
                                                ('2025-02-26 22:00:00', (SELECT id FROM words WHERE word = 'Pen')),
                                                ('2025-02-27 23:00:00', (SELECT id FROM words WHERE word = 'Computer')),
                                                ('2025-02-28 10:00:00', (SELECT id FROM words WHERE word = 'Phone'));

-- Insert additional quiz_coming entries for future dates
INSERT INTO quiz_coming (due_date, word_id) VALUES
                                                ('2025-02-24 11:00:00', (SELECT id FROM words WHERE word = 'Hello')),
                                                ('2025-02-25 12:00:00', (SELECT id FROM words WHERE word = 'Goodbye')),
                                                ('2025-02-26 13:00:00', (SELECT id FROM words WHERE word = 'Thank you')),
                                                ('2025-02-27 14:00:00', (SELECT id FROM words WHERE word = 'Cat')),
                                                ('2025-02-28 15:00:00', (SELECT id FROM words WHERE word = 'Dog')),
                                                ('2025-03-01 16:00:00', (SELECT id FROM words WHERE word = 'Bird')),
                                                ('2025-03-02 17:00:00', (SELECT id FROM words WHERE word = 'Sun')),
                                                ('2025-03-03 18:00:00', (SELECT id FROM words WHERE word = 'Moon')),
                                                ('2025-03-04 19:00:00', (SELECT id FROM words WHERE word = 'Star')),
                                                ('2025-03-05 20:00:00', (SELECT id FROM words WHERE word = 'Tree')),
                                                ('2025-03-06 21:00:00', (SELECT id FROM words WHERE word = 'Flower')),
                                                ('2025-03-07 22:00:00', (SELECT id FROM words WHERE word = 'Rain')),
                                                ('2025-03-08 23:00:00', (SELECT id FROM words WHERE word = 'Snow')),
                                                ('2025-03-09 10:00:00', (SELECT id FROM words WHERE word = 'Cloud')),
                                                ('2025-03-10 11:00:00', (SELECT id FROM words WHERE word = 'Wind')),
                                                ('2025-03-11 12:00:00', (SELECT id FROM words WHERE word = 'Sky')),
                                                ('2025-03-12 13:00:00', (SELECT id FROM words WHERE word = 'Water')),
                                                ('2025-03-13 14:00:00', (SELECT id FROM words WHERE word = 'Fire')),
                                                ('2025-03-14 15:00:00', (SELECT id FROM words WHERE word = 'Earth')),
                                                ('2025-03-15 16:00:00', (SELECT id FROM words WHERE word = 'Air')),
                                                ('2025-03-16 17:00:00', (SELECT id FROM words WHERE word = 'Food')),
                                                ('2025-03-17 18:00:00', (SELECT id FROM words WHERE word = 'Drink')),
                                                ('2025-03-18 19:00:00', (SELECT id FROM words WHERE word = 'House')),
                                                ('2025-03-19 20:00:00', (SELECT id FROM words WHERE word = 'Car')),
                                                ('2025-03-20 21:00:00', (SELECT id FROM words WHERE word = 'Bike')),
                                                ('2025-03-21 22:00:00', (SELECT id FROM words WHERE word = 'Book')),
                                                ('2025-03-22 23:00:00', (SELECT id FROM words WHERE word = 'Pen')),
                                                ('2025-03-23 10:00:00', (SELECT id FROM words WHERE word = 'Computer')),
                                                ('2025-03-24 11:00:00', (SELECT id FROM words WHERE word = 'Phone'));

-- Generate quiz_results with an improving learning curve over 14 days
WITH RECURSIVE date_series AS (
    SELECT '2025-02-10 00:00:00'::timestamp AS date
UNION ALL
SELECT date + INTERVAL '1 day'
FROM date_series
WHERE date < '2025-02-23 23:59:59'
    ),
    word_series AS (
SELECT id, word, translation
FROM words
    ),
    random_quiz_results AS (
SELECT ds.date, ws.id AS word_id, CASE WHEN random() < 0.3 THEN 'SUCCESS' ELSE 'FAILED' END AS result
FROM date_series ds
    CROSS JOIN word_series ws
ORDER BY ds.date, ws.id
    LIMIT 200
    )
INSERT INTO quiz_results (date, word_id, result)
SELECT date, word_id, result
FROM random_quiz_results
ON CONFLICT DO NOTHING;

-- Update quiz_results to simulate an improving learning curve
UPDATE quiz_results
SET result = 'SUCCESS'
WHERE date >= '2025-02-15 00:00:00' AND date <= '2025-02-23 23:59:59' AND word_id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

UPDATE quiz_results
SET result = 'SUCCESS'
WHERE date >= '2025-02-16 00:00:00' AND date <= '2025-02-23 23:59:59' AND word_id IN (11, 12, 13, 14, 15, 16, 17, 18, 19, 20);

UPDATE quiz_results
SET result = 'SUCCESS'
WHERE date >= '2025-02-17 00:00:00' AND date <= '2025-02-23 23:59:59' AND word_id IN (21, 22, 23, 24, 25, 26, 27, 28, 29);
