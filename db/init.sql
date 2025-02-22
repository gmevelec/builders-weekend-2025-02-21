CREATE TABLE tmp_words (
   id SERIAL PRIMARY KEY,
   value VARCHAR(255) NOT NULL
);

CREATE TABLE words (
    id SERIAL PRIMARY KEY,
    word VARCHAR(255) NOT NULL,
    translation VARCHAR(255) NOT NULL,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert words with specific timestamps
INSERT INTO words (word, translation, date_added) VALUES
('Hello', 'こんにちは', '2025-02-21 10:00:00'),
('Goodbye', 'さよなら', '2025-02-22 11:00:00'),
('Thank you', 'ありがとうございます', '2025-02-22 12:00:00');

CREATE TABLE quiz_results (
    id SERIAL PRIMARY KEY,
    result VARCHAR(50) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    word_id INTEGER NOT NULL,
    FOREIGN KEY (word_id) REFERENCES words(id)
);

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
