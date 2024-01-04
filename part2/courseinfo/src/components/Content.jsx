import { Part } from './Part';
import { PropTypes } from 'prop-types';

export const Content = ({ parts }) => {
  return (
    <div>
      {
        parts.map(part => <Part key={part.id} part={part}/>)
      }
    </div>
  )
}

Content.propTypes = {
  parts: PropTypes.array.isRequired,
}