import styled from 'styled-components';
import { darken } from 'polished';

interface Button {
  color?: string;
}
export const Container = styled.button`
  border: none;
  background: ${({ color }) => color || '#08b2e3'};
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ color }) => darken(0.1, color || '#08b2e3')};
  }

  &:active {
    transform: scale(0.9);
  }
`;
