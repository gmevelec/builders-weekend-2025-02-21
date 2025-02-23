import React, { useEffect, useState } from "react";
import "../customComponentsStyle/Quiz.css";

// interface Card {
//   id: number;
//   title: string;
//   description: string;
// }

interface QuizData {
  quiz_coming_id: number;
  due_date: string;
  word_id: number;
  word: string;
  translation: string;
  date_added: string;
  example_id: number;
  example: string;
}

interface QuizProps {
  data: QuizData[];
  handleFailedClick: () => Promise<void>;
  skipCardFunc: () => Promise<void>;
}

const Quiz: React.FC<QuizProps> = ({
  data,
  handleFailedClick,
  skipCardFunc,
}) => {
  console.log(data ? ` ${data[0].translation} data` : null);

  console.log(data, "data here");

  const [showCard, setShowCard] = useState<boolean>(false);
  const [cards, setCards] = useState<QuizData[]>([]);

  useEffect(() => {
    data ? setCards(data) : [];
  }, [data]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShowCard(true);
  };

  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);

  const skipCard = (): void => {
    // if (currentCardIndex < cards.length - 1) {
    //   setShowCard(false);
    //   setCurrentCardIndex(currentCardIndex + 1);
    //   handleFailedClick();
    // } else {
    //   // Возвращаемся к первой карточке, если достигли конца
    //   setCurrentCardIndex(0);
    // }
    handleFailedClick();
    setShowCard(false);
  };

  const handleDelete = (): void => {
    // setCards((prevCards) => {
    //   const updatedCards = prevCards.filter(
    //     (_, index) => index !== currentCardIndex
    //   );
    //   skipCardFunc();
    //   // skipCardFunc(cards.filter((_, index) => index !== currentCardIndex));

    //   // Если удаляем последнюю карточку, корректируем индекс
    //   const newIndex =
    //     currentCardIndex >= updatedCards.length ? 0 : currentCardIndex;

    //   setCurrentCardIndex(newIndex);
    //   setShowCard(false);
    //   return updatedCards;
    // });
    skipCardFunc();
    setShowCard(false);
  };

  console.log(showCard);
  console.log(cards);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="quiz">
        {cards.length > 0 && (
          <div className="card" key={cards[currentCardIndex].word_id}>
            <div className="card-header">{cards[currentCardIndex].word}</div>
            <div className="card-body">
              {showCard ? (
                <>
                  <div className="inner-text">
                    <h3>{cards[currentCardIndex].translation}</h3>
                  </div>
                  <div className="inner-text">
                    {cards[currentCardIndex].example}
                  </div>
                  <div className="button-block">
                    Remember?
                    <div className="buttons">
                      <button className="btn red" onClick={skipCard}>
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18 17.94 6M18 18 6.06 6"
                          />
                        </svg>
                      </button>
                      <button className="btn green" onClick={handleDelete}>
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 11.917 9.724 16.5 19 7.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="card-body-hidden" onClick={handleClick}>
                  <svg
                    className="w-[48px] h-[48px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="white"
                      stroke-width="2"
                      d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                    />
                    <path
                      stroke="white"
                      stroke-width="2"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
              )}
              {cards.length === 0 && <p>Карточки закончились.</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
