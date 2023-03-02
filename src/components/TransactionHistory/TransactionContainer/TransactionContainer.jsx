import PropTypes from 'prop-types';
import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem'
import { Table, TableHead } from './TransactionContainer.styled'

export function TransactionContainer({ items }) { 
  return (
    
      <Table>
        <TableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </TableHead>
        
        <tbody>
          {items.map(({ amount, currency, id, type }) => (
            <TransactionHistoryItem amount={amount} currency={currency} key={id} type={ type} />
        ))}
        </tbody>
      </Table>
    
  )
}

TransactionContainer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact(({
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    }))
  )
}