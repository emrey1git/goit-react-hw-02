import React from "react";
import Styles from './Options.module.css'

function Options({ updateFeedback, resetFeedback,  totalFeedback}) {
  return (
    <div className={Styles.buttons}>
      <button className={Styles.optButton} onClick={() => updateFeedback("good")}>Good</button>
      <button className={Styles.optButton}  onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button className={Styles.optButton}  onClick={() => updateFeedback("bad")}>Bad</button>

      {totalFeedback > 0 && (
        <button className={Styles.optButton}  onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
}

export default Options;
