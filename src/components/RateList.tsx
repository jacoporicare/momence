import { Rate } from '../api/exchangeRates';

import {
  Table,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
} from './common/Table';

type Props = {
  rates: Rate[];
};

export default function RateList(props: Props) {
  return (
    <Table>
      <thead>
        <TableHeaderRow>
          <TableHeaderCell>Currency</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Rate</TableHeaderCell>
        </TableHeaderRow>
      </thead>
      <tbody>
        {props.rates.map((rate) => (
          <TableRow key={rate.code}>
            <TableCell>{rate.code}</TableCell>
            <TableCell $alignRight>{rate.amount}</TableCell>
            <TableCell $alignRight>{rate.rate}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
