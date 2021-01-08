import React, { InputHTMLAttributes } from 'react';
import { Field } from 'formik';
import { Container, Label } from './styles';

interface InputField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  name: string;
  type: string;
  error?: string;
  placeholder: string;
}

const InputField: React.FC<InputField> = ({
  label,
  id,
  name,
  type = 'text',
  error,
  placeholder,
}) => {
  return (
    <Container>
      <Label htmlFor={id} error={error}>
        {label}
        <Field
          as="input"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
        />
        {error && <span>{error}</span>}
      </Label>
    </Container>
  );
};

export default InputField;
