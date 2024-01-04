import { PropTypes } from 'prop-types'
export const Total = (props) => {
  const total = props.parts.reduce((a, b) => a + b.exercises, 0)

  return(
    <p>
      Number of exercises {total}
    </p>
  )
}

Total.propTypes = {
  parts: PropTypes.array.isRequired,
}