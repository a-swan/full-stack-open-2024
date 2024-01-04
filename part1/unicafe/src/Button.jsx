import { PropTypes } from 'prop-types';

export const Button = ({label, onButtonClicked}) => {
  return (
    <button onClick={onButtonClicked}>{label}</button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
}