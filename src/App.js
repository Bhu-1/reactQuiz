import { Fragment, useState } from "react";
import "./App.css";
import QuestionArea from "./Component/QuestionArea";
import Result from "./Component/Result";
import Card from "./UI/Card";

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Number of IPL won by CSK",
      options: [
        { option: "2", isCorrect: false },
        { option: "3", isCorrect: true },
        { option: "1", isCorrect: false },
        { option: "4", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "Which Captain Won all ICC Trophies.",
      options: [
        { option: "Eoin Morgan", isCorrect: false },
        { option: "Ricky Pointing", isCorrect: false },
        { option: "MS Dhoni", isCorrect: true },
        { option: "Sir Vivian Richards", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Which Indian bowler taken Hat-trick twice in ODI.",
      options: [
        { option: "Irfan Pathan", isCorrect: false },
        { option: "Kuldeep Yadav", isCorrect: true },
        { option: "Mohammad Shami", isCorrect: false },
        { option: "Jasprit Bumrah", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Who is called Mr. Cricket",
      options: [
        { option: "Tom Moody", isCorrect: false },
        { option: "Virat Kohli", isCorrect: false },
        { option: "Damien Martin", isCorrect: false },
        { option: "Mike Hussey", isCorrect: true },
      ],
    },
  ]);
  const [number, setIndex] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [isChecked, setChecked] = useState(true);

  const questionChangeHandler = () => {
    if (number > questions.length - 2) {
      setChecked((prev) => false);
      return;
    }
    setIndex((prevIndex) => prevIndex + 1);
  };

  const checkAnswer = (ans) => {
    if (ans) {
      setAnswer((prevAns) => prevAns + 1);
    }
  };
  return (
    <Fragment>
      <Card>
        {isChecked ? (
          <QuestionArea
            check={checkAnswer}
            index={number + 1}
            onClick={questionChangeHandler}
            question={questions[number].question}
            options={questions[number].options}
            id={questions[number].id}
          />
        ) : (
          <Result answer={answer} />
        )}
      </Card>
    </Fragment>
  );
}

export default App;
