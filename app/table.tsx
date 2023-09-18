import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';
import { Invoice } from './types';

export default function InvoicesTable({ invoices }: { invoices: Invoice[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Label</TableHeaderCell>
          <TableHeaderCell>Unit Price</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Quantity</TableHeaderCell>
          <TableHeaderCell>Total</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.label}>
            <TableCell>{invoice.label}</TableCell>
            <TableCell>
              <Text>{invoice.unit_price}</Text>
            </TableCell>
            <TableCell>
              <Text>{invoice.amount}</Text>
            </TableCell>
            <TableCell>
              <Text>{invoice.quantity}</Text>
            </TableCell>
            <TableCell>
              <Text>{invoice.total}</Text>
            </TableCell>
            <TableCell>
              <Text>{invoice.type}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
