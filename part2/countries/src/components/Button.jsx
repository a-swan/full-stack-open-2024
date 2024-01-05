import { PropTypes } from 'prop-types';

export const Button = ({label, onButtonClicked, id}) => {
  return (
    <button onClick={() => onButtonClicked(id)}>{label}</button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}