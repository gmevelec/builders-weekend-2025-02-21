-- init.sql
CREATE TABLE words (
   id INTEGER PRIMARY KEY,
   word VARCHAR(255),
   translation VARCHAR(255)
);

INSERT INTO words (id, word, translation) VALUES
(1, 'Hello', 'こんにちは'),
(2, 'Goodbye', 'さよなら'),
(3, 'Thank you', 'ありがとうございます');

CREATE TABLE examples (
  id INTEGER PRIMARY KEY,
  example VARCHAR(255),
  word_id INTEGER,
  FOREIGN KEY (word_id) REFERENCES words(id)
);

INSERT INTO examples (id, example, word_id) VALUES
(1, 'こんにちは、元気ですか？', 1),
(2, 'こんにちは、お仕事はどうですか？', 1),
(3, 'こんにちは、今日の天気はいいですね。', 1),
(4, 'さよなら、またね。', 2),
(5, '良い旅を、さよなら。', 2),
(6, '明日また会おう、さよなら。', 2),
(7, 'ありがとう、助けてくれて。', 3),
(8, 'いつもありがとう。', 3),
(9, '大変お世話になりました、ありがとう。', 3);
