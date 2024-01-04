import { TextInput } from './TextInput'
import { Button } from './Button'

import { PropTypes } from 'prop-types'

export const Form = ({onNameChanged, onNumberChanged, onSubmitClick}) => {
  return(
    <form>
      <div>
        <TextInput label="name:" onInputChanged={onNameChanged} />
        <TextInput label="number: " onInputChanged={onNumberChanged} />
      </div>
      <div>
        <Button type="submit" onSubmitClick={onSubmitClick} label="add"/>
      </div>
    </form>
  )
}

Form.propTypes = {
  onNameChanged: PropTypes.func.isRequired,
  onNumberChanged: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired
}