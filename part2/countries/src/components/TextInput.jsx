import { PropTypes } from 'prop-types'

export const TextInput = ({label, onTextChanged}) => {
  return (
    <div>
      {label} <input onChange={onTextChanged}/>
    </div>
  )
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onTextChanged: PropTypes.func
}