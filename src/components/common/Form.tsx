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
  -webkit-border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
    no-repeat 98% 50%;
`;
