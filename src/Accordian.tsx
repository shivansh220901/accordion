import { useState } from "react";

const Accordion = () => {
  const data = [
    {
      header: "Lorem, ipsum dolor 1.",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, laborum.",
    },
    {
      header: "Lorem, ipsum dolor 2.",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, laborum.",
    },
    {
      header: "Lorem, ipsum dolor 3.",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, laborum.",
    },
    {
      header: "Lorem, ipsum dolor 4.",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, laborum.",
    },
  ];

  const toggleContent = (index: number) => {
    setShowIndex(showIndex === index ? null : index);
  };
  const [showIndex, setShowIndex] = useState(null);
  return (
    <>
      {data.map((val, index) => {
        return (
          <>
            <div onClick={() => toggleContent(index)}>{val.header}</div>
            {showIndex === index && <div>{val.content}</div>}
          </>
        );
      })}
    </>
  );
};

export default Accordion;
