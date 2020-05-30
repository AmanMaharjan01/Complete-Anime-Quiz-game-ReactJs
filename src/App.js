import React, { useState, useEffect } from "react";
import "./App.css";
import Quiz from "./components/quiz";
import PostData from "./questions.json";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [nextquestion, setNextquestion] = useState(0);
  const [correctanswer, setCorrectanswer] = useState(0);

  useEffect(() => {
    getData();
  }, [nextquestion]);

  const getData = async () => {
    setQuestions(PostData.results[nextquestion]);
    setOptions(PostData.results[nextquestion].options);
  };

  // const checkAnswer = (name) => {
  //   alert(name);
  // };
  const msg = PostData.results[nextquestion].correct_answer;

  function sayHello(ans) {
    var answer = ans;
    if (answer === msg) setCorrectanswer(correctanswer + 1);
    console.log(correctanswer);
    const value = nextquestion;
    if (value < 14) {
      setNextquestion(nextquestion + 1);
    } else {
      alert("Your Score is : " + correctanswer / 15);
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quiz">
          <div className="App">
            <img src="img/logo.png" id="logo" alt="logo" />
            <h1>One Piece Quiz</h1>
            <p>Question : {nextquestion + 1}/15</p>
            <Quiz questions={questions} />
            <div className="content">
              {options.map((option) => (
                <button
                  id="option"
                  key={option}
                  value={option}
                  onClick={() => sayHello(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </Route>
      </Switch>
      <h1 id="score"></h1>
    </Router>
  );
}

export default App;
