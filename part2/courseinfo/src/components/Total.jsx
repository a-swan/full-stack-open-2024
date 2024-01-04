import { PropTypes } from 'prop-types'

export const Total = ({ parts }) => {
  const total = parts.reduce((a, b) => a + b.exercises, 0)

  return(
    <strong>
      Total of {total} exercises
    </strong>
  )
}

Total.propTypes = {
  parts: PropTypes.array.isRequired,
}