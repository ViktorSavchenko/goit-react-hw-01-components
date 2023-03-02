import transactions from '../transactions';
import {TransactionContainer} from '../TransactionContainer/TransactionContainer'

export const TransactionHistoryApp = () => {
  return (
    <TransactionContainer items={ transactions} />
  )
}