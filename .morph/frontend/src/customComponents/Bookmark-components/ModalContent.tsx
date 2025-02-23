import React from "react";

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

interface WordGroup {
  word: string;
  items: BookmarkData[];
}

interface ModalContentProps {
  contentList: WordGroup[]; // Обязательный пропс
}

const ModalContent: React.FC<ModalContentProps> = ({ contentList }) => {
  console.log("contentList в ModalContent:", contentList); // Проверка данных

  const modalContainer: React.CSSProperties = {
    width: "100%",
    paddingTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxHeight: "75vh",
  };

  const modalHeader: React.CSSProperties = {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "0 30px",
  };

  const ModalHeaderTitle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const arrowStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
  };

  const itemStyle: React.CSSProperties = {
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
  };

  const wordStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const exampleStyle: React.CSSProperties = {
    fontSize: "20px",
    color: "white",
    textAlign: "left",
    wordBreak: "break-word",
  };

  const ModalBody: React.CSSProperties = {
    width: "100%",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  return (
    <div style={modalContainer}>
      <div style={modalHeader}>
        <div style={ModalHeaderTitle}>Source</div>
        <div style={arrowStyle}>&#8594;</div>
        <div style={ModalHeaderTitle}>Target</div>
      </div>

      <div style={ModalBody}>
        {contentList.length > 0 ? (
          contentList.map((item) => (
            <div key={item.word} style={itemStyle}>
              <div style={exampleStyle}>{item.word}</div>
            </div>
          ))
        ) : (
          <p>Нет данных для отображения</p>
        )}
      </div>
    </div>
  );
};

export default ModalContent;
