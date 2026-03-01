// import { useState } from "react";

import Button from "../Button/Button";

import { type FeedbackProps } from "./types";

// import "./styles.css";

import {FeedbackWrapper, FeedbackControl, ButtonWithCountContainer, Count} from "./styles";

function Feedback({like, dislike, onLike, onDislike, resetResults}:FeedbackProps) {
  // const [like, setLike] = useState(0); // Если мы ничего не передаем в качестве аргумента функции useState(), то 1 элемент массива, который эта функция возвращает === undefined
  // const [dislike, setDislike] = useState(0);

  // const onLike = () => {
  //   // setLike((prevValue) => {
  //   //   return like + 1;
  //   // });
  //   //  setLike((prevValue) => {
  //   //   return like + 1;
  //   // });
  //   //  setLike((prevValue) => {
  //   //   return like + 1;
  //   // });

  //       setLike((prevValue) => {
  //     return prevValue + 1;
  //   });
  //    setLike((prevValue) => {
  //     return prevValue + 1;
  //   });
  //    setLike((prevValue) => {
  //     return prevValue + 1;
  //   });
  // };

  // console.log("Component Feedback rendering!!!");

  // const onDislike = () => {
  //   setDislike((prevValue) => prevValue + 1);
  // };

  // const resetResults = () => {
  //   setLike(0);
  //   setDislike(0);
  // };

  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCountContainer>
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonWithCountContainer>
        <ButtonWithCountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonWithCountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;