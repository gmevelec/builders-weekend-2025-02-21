import "./CardSkeleton.css";

export const ResponseCard = () => {
  return (
    <div className="card">
      <div className="card__skeleton card__title"></div>
      <div className="card__skeleton card__description"> </div>
    </div>
  );
};
