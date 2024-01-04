import { PropTypes } from 'prop-types'
import { StatisticsLine } from './StatisticsLine';

export const Statistics = ({good, neutral, bad}) => {
  if(good + neutral + bad === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }

  let positiveValue = `${(good / (good + neutral + bad)) * 100}%`

  return(
    <table>
      <tbody>
        <StatisticsLine text="Good" value={good}/>
        <StatisticsLine text="Neutral" value={neutral}/>
        <StatisticsLine text="Bad" value={bad}/>
        <StatisticsLine text="All" value={good + neutral + bad}/>
        <StatisticsLine text="Average" value={(good - bad) / (good + neutral + bad)}/>
        <StatisticsLine text="Positive" value={positiveValue}/>
      </tbody>
    </table>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
}