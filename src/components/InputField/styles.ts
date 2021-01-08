import styled from 'styled-components';

interface Label {
  error?: string;
}

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label<Label>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: ${({ error }) => (error ? '#EE6352' : '#fff')};
  font-size: 1.2rem;

  & > input {
    border: ${({ error }) => (error ? '2px solid #EE6352' : 'none')};
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    width: 100%;
  }

  & > span {
    color: #ee6352;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`;
