import React from 'react';
import Styles from './Feedback.module.css'

function Feedback({ values, totalFeedback, positiveFeedbackPercentage }) {
  return (
    
    <div className={Styles.feedContent}>
        
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
}

export default Feedback;
