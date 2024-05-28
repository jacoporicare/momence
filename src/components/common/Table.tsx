import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${(props) => props.theme.table.altRowBackgroundColor};
  }
`;

export const TableCell = styled.td<{ $alignRight?: boolean }>`
  padding: 0.5em;
  border: 1px solid ${(props) => props.theme.table.borderColor};
  text-align: ${(props) => (props.$alignRight ? 'right' : 'left')};
`;

export const TableHeaderRow = styled.tr`
  background-color: ${(props) => props.theme.table.headerBackgroundColor};
  font-weight: bold;
`;

export const TableHeaderCell = styled.th`
  padding: 0.6em;
  background-color: ${(props) => props.theme.table.headerBackgroundColor};
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.table.borderColor};
  text-align: center;
`;
