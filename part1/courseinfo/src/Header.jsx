import { PropTypes } from 'prop-types'
export const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

Header.propTypes = {
  course: PropTypes.string.isRequired,
}