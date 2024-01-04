import { PropTypes } from 'prop-types'

export const TextInput = ({label, onInputChanged}) => {
  return(
      <div>
        {label} <input onChange={onInputChanged}/>
      </div>
    )
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onInputChanged: PropTypes.func.isRequired,
}