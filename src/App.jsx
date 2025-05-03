import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description";
import Feedback from "./components/Feedback";
import Options from "./components/Options";

function App() {
  // Yerel depolamadan veri al, eğer yoksa sıfırla başla
  const [feed, setFeed] = useState(() => {
    const savedFeed = localStorage.getItem("feed");
    return savedFeed ? JSON.parse(savedFeed) : { good: 0, neutral: 0, bad: 0 };
  });
   // feed her değiştiğinde localStorage'a yaz
   useEffect(() => {
    localStorage.setItem("feed", JSON.stringify(feed));
  }, [feed]);

  // updateFeedback fonksiyonu
  const updateFeedback = (feedbackType) => {
    setFeed((prevFeed) => {
      const newFeed = {
        ...prevFeed,
        [feedbackType]: prevFeed[feedbackType] + 1,
      };
      // Geri bildirim türü değiştikten sonra veriyi yerel depolamaya kaydet
      localStorage.setItem("feed", JSON.stringify(newFeed));
      return newFeed;
    });
  };

  const resetFeedback = () => {
    const initialState = { good: 0, neutral: 0, bad: 0 };
    setFeed(initialState);
    localStorage.setItem("feed", JSON.stringify(initialState));
  };
  
  const totalFeedback = feed.good + feed.neutral + feed.bad;
  const positiveFeedbackPercentage = totalFeedback === 0 ? 0 : Math.round((feed.good / totalFeedback) * 100);

  return (
    <>
      <Description />

        <Options
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          totalFeedback={totalFeedback}
        />


      {totalFeedback === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '30px', color: 'red' }}>
        No feedback given yet!
      </div>
      
      ) : (
        
        <Feedback
          values={feed}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />

      )}
    </>
  );
}

export default App;
