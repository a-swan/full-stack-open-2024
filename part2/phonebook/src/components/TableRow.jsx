import { PropTypes } from 'prop-types'

export const TableRow = ({ person, onDeleteClicked }) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td><button onClick={() => onDeleteClicked(person.id)}>delete</button></td>
    </tr>
  )
}

TableRow.propTypes = {
  person: PropTypes.object.isRequired,
  onDeleteClicked: PropTypes.func.isRequired
}