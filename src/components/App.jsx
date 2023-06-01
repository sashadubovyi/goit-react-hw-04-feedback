import { useState } from 'react';
import { Button, MainContainer, MinorContainer, Title } from './App.styled';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGood = () => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      good: prevFeedback.good + 1,
    }));
  };

  const handleNeutral = () => {
    setFeedback(prevNeutral => ({
      ...prevNeutral,
      good: prevNeutral.neutral + 1,
    }));
  };

  const handleBad = () => {
    setFeedback(prevBad => ({
      ...prevBad,
      good: prevBad.bad + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total > 0 ? ((good * 100) / total).toFixed(2) : 0;
  };

  return (
    <MainContainer>
      <FeedbackOptions>
        <Title>Please leave feedback</Title>
        <MinorContainer>
          <Button onClick={handleGood}>Good</Button>
          <Button onClick={handleNeutral}>Neutral</Button>
          <Button onClick={handleBad}>Bad</Button>
        </MinorContainer>
      </FeedbackOptions>
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={feedback.good}
          bad={feedback.bad}
          neutral={feedback.neutral}
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
