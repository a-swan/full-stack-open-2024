import { PropTypes } from 'prop-types'

export const Header = ({heading}) => {
  return (
    <h1>
      {heading}
    </h1>
  )
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
}