import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: string;
}
const Button: React.FC<Button> = ({ label, color, ...props }) => {
  return (
    <Container type="button" color={color} {...props}>
      {label}
    </Container>
  );
};

export default Button;
