import { ReactNode } from 'react';
import { styled } from 'styled-components';

type Props = {
  title?: ReactNode;
  children: ReactNode;
};

const Alert = styled.div`
  background-color: ${(props) => props.theme.error.backgroundColor};
  padding: 1em;
  border: 1px solid ${(props) => props.theme.error.borderColor};
  border-radius: 4px;
`;

const Header = styled.h2`
  margin-top: 0;
`;

export function Error(props: Props) {
  return (
    <Alert>
      {props.title && <Header>{props.title}</Header>}
      {props.children}
    </Alert>
  );
}
