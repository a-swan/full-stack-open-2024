import { PropTypes } from 'prop-types'

export const Button = ({ label, type, onSubmitClick }) => {
  return (
    <button type={type} onClick={onSubmitClick}>{label}</button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onSubmitClick: PropTypes.func.isRequired
}