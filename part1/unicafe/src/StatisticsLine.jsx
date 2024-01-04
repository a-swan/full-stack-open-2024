import { PropTypes } from 'prop-types'

export const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

StatisticsLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired, 
    PropTypes.number.isRequired
  ])
}