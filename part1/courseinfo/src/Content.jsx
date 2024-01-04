import { Part } from './Part';
import { PropTypes } from 'prop-types';

export const Content = (props) => {
  return (
    <div>
      <Part course={props.parts[0]}/>
      <Part course={props.parts[1]}/>
      <Part course={props.parts[2]}/>
    </div>
  )
}

Content.propTypes = {
  parts: PropTypes.array.isRequired,
}