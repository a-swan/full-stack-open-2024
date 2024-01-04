import { TableRow } from './TableRow'

import { PropTypes } from 'prop-types'

export const Table = ({ persons }) => {
  return (
    <table>
      <tbody>
        {persons.map(person => <TableRow key={person.name} person={person} />)}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  persons: PropTypes.array.isRequired
}