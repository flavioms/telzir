import React from 'react';
import { Field } from 'formik';
import { Container, Label } from './styles';

interface Option {
  label: string;
  value: string | number;
}

interface SelectField {
  label: string;
  id: string;
  name: string;
  error?: string;
  placeholder: string;
  options: Option[];
  defaultOption: Option;
}
const SelectField: React.FC<SelectField> = ({
  label,
  id,
  name,
  placeholder,
  error,
  options,
  defaultOption,
}) => {
  return (
    <Container>
      <Label htmlFor={id} error={error}>
        {label}
        <Field as="select" id={id} name={name} placeholder={placeholder}>
          <option value={defaultOption.value}>{defaultOption.label}</option>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </Field>
        {error && <span>{error}</span>}
      </Label>
    </Container>
  );
};

export default SelectField;
