import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.form.borderColor};
  position: relative;
  padding-right: 0.5em;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  margin-right: 0.5rem;
  padding: 0.5em;
`;

export const Arrow = styled.div`
  flex: 0;
  margin: 0 0.5rem;
  font-size: 1.75em;
`;

export const Select = styled.select`
  flex: 1;
  border: 1px solid ${(props) => props.theme.form.borderColor};
  padding: 0.5em;
`;
