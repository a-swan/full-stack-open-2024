import { PropTypes } from 'prop-types'

export const TableRow = ({ person }) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
    </tr>
  )
}

TableRow.propTypes = {
  person: PropTypes.object.isRequired,
}