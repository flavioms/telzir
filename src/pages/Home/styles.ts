import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 30vw;
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  label {
    margin-bottom: 1rem;
  }
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  width: 30vw;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
`;

export const Price = styled.h2<{ smaller: boolean }>`
  font-size: ${({ smaller }) => (smaller ? '3rem' : '1.5rem')};
  font-weight: ${({ smaller }) => (smaller ? 900 : 500)};
  color: ${({ smaller }) => (smaller ? '#57a773' : '#ee6352')};
  margin-bottom: 1rem;
  & > span {
    margin-left: 1rem;
  }
`;
