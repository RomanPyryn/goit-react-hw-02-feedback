import { Component } from "react";
import Statistics from "./Statistics";
import Notification from "./Notification"
import FeedbackOptions from "./FeedbackOptions";
import { Container } from "./Feedback.styled"

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    hendleAddFeedback = (e) => {
        const option = e.currentTarget.name;
        this.setState({ [option]: this.state[option] + 1 })
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100);
    };

    render() {
      return (
            <Container>
                <div>
                  <h2>Please leave feedback</h2>
                  
                  <FeedbackOptions
                      options={Object.keys(this.state)}
                      onLeaveFeedback={this.hendleAddFeedback}/>
                </div>
                <div>
                  <h2>Statistic</h2> 
                  {this.countTotalFeedback() > 0 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/> }
                </div>
            </Container>);
    };
};

export default Feedback;