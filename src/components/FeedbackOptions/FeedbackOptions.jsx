import { FeedbackButton } from "./FeedbackOptions.styled";

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return options.map((el, i) => (
    <FeedbackButton key={i} type="button" name={el} onClick={onLeaveFeedback}>
      {el}
    </FeedbackButton>
  ));
}