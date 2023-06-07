import React from 'react';
import css from './FeedbackOptions.module.css';
//кнопки
const getBgColor = variant => {
  switch (variant) {
    case "good":
      return "rgb(212, 152, 237)"
             
    case "bad":
      return "rgb(147, 33, 234)";
    case "neutral":
      return "rgb(228, 92, 180)";
 
    default:
   
  }
};
export const FeedbackOptions = ({options, onCountOptions}) => {
    return (
      <div className={css.button_div}>
        {options.map(option => (
        <button 
        type="button" 
        style={{ backgroundColor: getBgColor(option)}}
        onClick={() => {
        onCountOptions(option)
        }}>{option}</button>
        ))}
      </div> 
      );
  }
