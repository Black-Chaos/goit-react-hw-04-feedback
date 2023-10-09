import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOptions = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.keys(this.state).reduce((acc, el) => acc + this.state[el], 0);

  countPositiveFeedbackPercentage = () =>
    this.state.good
      ? ((100 / this.countTotalFeedback()) * this.state.good).toFixed()
      : 0;

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <div className="options">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleOptions}
            />
          </div>
        </Section>
          <Section title={'Statistics'}>
        {good || neutral || bad ? 
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
        : <Notification message="There is no feedback"/>}
          </Section>
      </>
    );
  }
}
