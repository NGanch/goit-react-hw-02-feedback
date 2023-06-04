import React from 'react';
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from './Notification/Notification.jsx';
import css from './App.module.css';


export class App extends React.Component {

  static defaultProps = {
      good: 0,
      neutral: 0,
      bad: 0,
  }

      state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,   
      };
       
          countGood = () => {
              this.setState(prevState =>({
                  good: prevState.good + 1,
              }))
          };
          countNeutral = () => {
              this.setState(prevState =>({
                  neutral: prevState.neutral + 1,
              }))
          }
          countBad = () => {
              this.setState(prevState =>({
                  bad: prevState.bad + 1,
              }))
          }

          countTotalFeedback = () => {
            const { good, neutral, bad } = this.state;
            return good + neutral + bad;
            
          }
      
          countPositiveFeedbackPercentage = () => {
            const { good, neutral, bad } = this.state;
            return Math.round((100 / (good + neutral + bad)) * good) || 0;
          }
          

  render() {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();
      return(
        <section className={css.container}>
          <div className={css.section_div}>
            <Section title="Please leave feedback">
              <FeedbackOptions 
              onCountGood = {this.countGood}
              onCountNeutral = {this.countNeutral}
              onCountBad = {this.countBad}
              />  
           </Section>
          {total > 0  ?
          <Statistics
          good={good} 
          neutral={neutral} 
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
          />
          :
          <Notification message="There is no feedback!" />
          }
       </div>
       </section>
      )
  }
}
