import { TableRow } from './TableRow'

import { PropTypes } from 'prop-types'

export const Table = ({ persons, onDeleteClicked }) => {
  return (
    <table>
      <tbody>
        {persons.map(person => <TableRow key={person.id} person={person} onDeleteClicked={onDeleteClicked}/>)}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  persons: PropTypes.array.isRequired,
  onDeleteClicked: PropTypes.func.isRequired
}