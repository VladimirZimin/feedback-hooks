import { GlobalStyle } from "./GlobalStyle";
import React, { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import StatisticInfo from "./components/StatisticInfo";
import Section from "./components/Section";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickButton = (evt) => {
    const { name } = evt.target;

    switch (name) {
      case "good":
        setGood((prev) => prev + 1);
        break;

      case "neutral":
        setNeutral((prev) => prev + 1);
        break;

      case "bad":
        setBad((prev) => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.floor(
    (good / countTotalFeedback) * 100
  );

  return (
    <>
      <GlobalStyle />
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClickButton}
        />
      </Section>
      <Section title={"Statistics"}>
        {countTotalFeedback === 0 ? (
          "There is no feedback"
        ) : (
          <StatisticInfo
            statistics={{ good, neutral, bad }}
            onCountTotal={countTotalFeedback}
            onCountTotalPercent={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClickButton = (evt) => {
//     const { name } = evt.target;

//     this.setState((prevState) => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((total, value) => {
//       return (total += value);
//     }, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();

//     return Math.floor((this.state.good / total) * 100);
//   };

//   render() {
//     const options = Object.keys(this.state);
//     const statistics = Object.entries(this.state);
//     const total = this.countTotalFeedback();

//     return (
//       <>
//         <GlobalStyle />
//         <Section title={"Please leave feedback"}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleClickButton}
//           />
//         </Section>
//         <Section title={"Statistics"}>
//           {total === 0 ? (
//             "There is no feedback"
//           ) : (
//             <StatisticInfo
//               statistics={statistics}
//               onCountTotal={this.countTotalFeedback}
//               onCountTotalPercent={this.countPositiveFeedbackPercentage}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
