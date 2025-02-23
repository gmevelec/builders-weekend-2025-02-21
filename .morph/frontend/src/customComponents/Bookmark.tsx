import React from "react";
import { useState, useEffect } from "react";
import WordItems from "./Bookmark-components/WordItem";
import SentenceModal from "./Bookmark-components/SentenceModal";
import ModalContent from "./Bookmark-components/ModalContent";

interface BookmarkData {
  quiz_coming_id: number;
  due_date: string;
  word_id: number;
  word: string;
  translation: string;
  date_added: string;
  example_id: number;
  example: string;
}

interface MergedWordItem {
  word: string;
  translation: string;
  examples: string[];
  date_added: string;
  word_id: number;
}

interface BookmarkProps {
  data: BookmarkData[];
}

const Bookmark: React.FC<BookmarkProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [groupedWords, setGroupedWords] = useState<MergedWordItem[]>([]);

  const mergeWords = (items: BookmarkData[]): MergedWordItem[] => {
    const mergedMap = items.reduce((acc: Map<string, MergedWordItem>, item) => {
      const existing = acc.get(item.word);

      if (existing) {
        // Добавляем пример если его еще нет
        if (!existing.examples.includes(item.example)) {
          existing.examples.push(item.example);
        }
      } else {
        // Создаем новую запись
        acc.set(item.word, {
          word: item.word,
          translation: item.translation,
          examples: [item.example],
          date_added: item.date_added,
          word_id: item.word_id,
        });
      }
      return acc;
    }, new Map<string, MergedWordItem>());

    // Сортировка по дате добавления
    return Array.from(mergedMap.values()).sort(
      (a, b) =>
        new Date(b.date_added).getTime() - new Date(a.date_added).getTime()
    );
  };

  useEffect(() => {
    if (data) {
      const processed = mergeWords(data);
      setGroupedWords(processed);
    }
  }, [data]);

  console.log(groupedWords);

  const onClose = () => {
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <WordItems toggleOpen={toggleOpen} />
      <SentenceModal isOpen={isOpen} onClose={onClose}>
        <ModalContent contentList={groupedWords} />
      </SentenceModal> */}
      <div
        style={{
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          alignItems: "start",
        }}
      >
        {groupedWords.map((wordItem) => (
          <div
            key={wordItem.word}
            style={{
              padding: "20px",
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ marginBottom: "15px" }}>
              <h2
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "1.4rem",
                  color: "#333",
                }}
              >
                {wordItem.word}
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    marginLeft: "10px",
                  }}
                >
                  ({wordItem.translation})
                </span>
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.8rem",
                  color: "#999",
                }}
              >
                Added: {new Date(wordItem.date_added).toLocaleDateString()}
              </p>
            </div>

            <div>
              <h4
                style={{
                  margin: "0 0 12px 0",
                  fontSize: "1rem",
                  color: "#444",
                }}
              >
                Examples:
              </h4>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {wordItem.examples.map((example, index) => (
                  <li
                    key={`${wordItem.word_id}-${index}`}
                    style={{
                      margin: "8px 0",
                      padding: "10px",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bookmark;
