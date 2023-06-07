import React from 'react';
import css from './FeedbackOptions.module.css';
//кнопки
import clsx from 'clsx';

export const FeedbackOptions = ({ options, onCountOptions }) => {
  return (
    <div className={css.button_div}>
      {options.map(option => (
        <button
          type="button"
          className={clsx(css.btn, css[option])}
          onClick={() => {
            onCountOptions(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
