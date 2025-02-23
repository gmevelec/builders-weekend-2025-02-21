import { FC } from "react";

type WordItemsProps = {
  toggleOpen: () => void;
};

const WordItems: FC<WordItemsProps> = (props) => {
  const { toggleOpen } = props;

  const contentList = [
    { id: 1, source: "source1", target: "target1" },
    { id: 2, source: "source2", target: "target2" },
    { id: 3, source: "source3", target: "target3" },
    { id: 4, source: "source4", target: "target4" },
    { id: 5, source: "source5", target: "target5" },
  ];

  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "auto",
    overflowY: "auto",
    padding: "16px",
    boxSizing: "border-box",
    margin: "0 auto",
    cursor: "pointer",

    // '&:hover': {
    //   opacity: 0.8,
    // }
  };

  const itemStyle: React.CSSProperties = {
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "16px",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "white",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const arrowStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
  };

  return (
    <div style={containerStyle} onClick={toggleOpen}>
      {contentList.map((item) => (
        <div key={item.id} style={itemStyle}>
          <div style={titleStyle}>{item.source}</div>
          <div style={arrowStyle}>&#8594;</div>
          <div style={titleStyle}>{item.target}</div>
        </div>
      ))}
    </div>
  );
};

export default WordItems;
