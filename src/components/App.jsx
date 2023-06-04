import { useState } from 'react';
import { MainContainer } from './App.styled';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(prevGood => prevGood + 1);
  };

  const handleNeutral = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
  };

  const handleBad = () => {
    setBad(prevBad => prevBad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? ((good * 100) / total).toFixed(2) : 0;
  };

  return (
    <MainContainer>
      <FeedbackOptions
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </MainContainer>
  );
};

export default App;
