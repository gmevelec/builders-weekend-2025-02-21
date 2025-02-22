-- init.sql
CREATE TABLE tmp_words (
   id SERIAL PRIMARY KEY,
   value VARCHAR(255) NOT NULL
);

CREATE TABLE words (
    id SERIAL PRIMARY KEY,
    word VARCHAR(255) NOT NULL,
    translation VARCHAR(255) NOT NULL
);

INSERT INTO words (word, translation) VALUES
('Hello', 'こんにちは'),
('Goodbye', 'さよなら'),
('Thank you', 'ありがとうございます');

CREATE TABLE examples (
  id SERIAL PRIMARY KEY,
  example VARCHAR(255) NOT NULL,
  word_id INTEGER NOT NULL,
  FOREIGN KEY (word_id) REFERENCES words(id)
);

INSERT INTO examples (example, word_id) VALUES
('こんにちは、元気ですか？', 1),
('こんにちは、お仕事はどうですか？', 1),
('こんにちは、今日の天気はいいですね。', 1),
('さよなら、またね。', 2),
('良い旅を、さよなら。', 2),
('明日また会おう、さよなら。', 2),
('ありがとう、助けてくれて。', 3),
('いつもありがとう。', 3),
('大変お世話になりました、ありがとう。', 3);
