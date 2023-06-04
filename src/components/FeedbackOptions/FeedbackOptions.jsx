import React from 'react';
import css from './FeedbackOptions.module.css';
//кнопки

export const FeedbackOptions = ({onCountGood, onCountNeutral, onCountBad}) => {
    return (
      <div className={css.button_div}>
        <button type="button" className={css.button_good} onClick={onCountGood}>Good</button>
        <button type="button" className={css.button_neutral} onClick={onCountNeutral}>Neutral</button>
        <button type="button" className={css.button_bad} onClick={onCountBad}>Bad</button>
      </div> 
      );
  }
