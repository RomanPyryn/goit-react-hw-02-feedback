import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => { 
    return (
        <div>
            <p>Good: {good} </p>
            <p>Neutral: {neutral} </p>
            <p>Bad: {bad} </p>
            <p>Total: {total} </p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    Total: PropTypes.number,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;