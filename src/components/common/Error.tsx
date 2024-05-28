import { ReactNode } from 'react';
import { styled } from 'styled-components';

type Props = {
  title?: ReactNode;
  children: ReactNode;
};

// TODO: theming
const Alert = styled.div`
  background-color: #ffaaaa;
  padding: 1em;
  border: 1px solid #900000;
  border-radius: 4px;
`;

const Header = styled.h2`
  margin-top: 0;
`;

export default function Error(props: Props) {
  return (
    <Alert>
      {props.title && <Header>{props.title}</Header>}
      {props.children}
    </Alert>
  );
}
