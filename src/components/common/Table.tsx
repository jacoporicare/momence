import styled from 'styled-components';

// TODO: theming

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHeader = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
  color: #2c3e50;
  font-weight: bold;
  border: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td<{ $alignRight?: boolean }>`
  padding: 10px;
  border: 1px solid #ddd;
  color: #2c3e50;
  text-align: ${(props) => (props.$alignRight ? 'right' : 'left')};
`;

export const TableHeaderRow = styled.tr`
  background-color: #f2f2f2;
  color: #2c3e50;
  font-weight: bold;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
  color: #2c3e50;
  font-weight: bold;
  border: 1px solid #ddd;
  text-align: center;
`;
