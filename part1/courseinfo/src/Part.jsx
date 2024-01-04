import { PropTypes } from 'prop-types';

export const Part = (props) => {
  return (
    <p>
      {props.course.name} {props.course.exercises}
    </p>
  )
}

Part.propTypes = {
  course: PropTypes.object.isRequired,
}