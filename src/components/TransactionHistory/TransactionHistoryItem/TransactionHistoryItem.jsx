import PropTypes from 'prop-types';
import { TransTableRaw, TransactionColumn } from './TransactionHistoryItem.styled'

export function TransactionHistoryItem({ type, amount, currency
}) { 
  return (
    <TransTableRaw>
      <TransactionColumn>{type}</TransactionColumn>
      <TransactionColumn>{amount}</TransactionColumn>
      <TransactionColumn>{currency}</TransactionColumn>
    </TransTableRaw>    
  )
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}