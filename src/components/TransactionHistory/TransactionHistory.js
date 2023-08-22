import { Table, ThThead, Tr, Td } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <Table>
    <thead>
      <tr>
        <ThThead>Type</ThThead>
        <ThThead>Amount</ThThead>
        <ThThead>Currency</ThThead>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <Tr key={item.id}>
          <Td>{item.type}</Td>
          <Td>{item.amount}</Td>
          <Td>{item.currency}</Td>
        </Tr>
      ))}
    </tbody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
