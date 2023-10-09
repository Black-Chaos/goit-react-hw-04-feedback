import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { useReducer } from 'react';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function fbCounter(st, { type }) {
  return {
    ...st,
    [type]: st[type] + 1,
  };
}

export function App() {
  const [fbState, fbDispatch] = useReducer(fbCounter, initialState);
  const { good, neutral, bad } = fbState;

  const countTotalFeedback = () =>
    Object.keys(fbState).reduce((acc, el) => acc + fbState[el], 0);

  const countPositiveFeedbackPercentage = () =>
    good
      ? ((100 / countTotalFeedback()) * good).toFixed()
      : 0;

  const haveFb = good || neutral || bad;

  return (
    <>
      <Section title="Please leave feedback">
        <div className="options">
          <FeedbackOptions
            options={Object.keys(fbState)}
            onLeaveFeedback={fbDispatch}
          />
        </div>
      </Section>
      <Section title={'Statistics'}>
        {haveFb ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
