import { PropsWithChildren } from 'react';

type FieldProps = {
  label: string;
  id: string;
};

/**
 * Represents a form field
 */
const Field = ({
  label,
  id,
  ...rest
}: PropsWithChildren<FieldProps> & JSX.IntrinsicElements['input']) => (
  <div className="inputGroup">
    <label htmlFor={id}>{label}</label>
    <input id={id} className="inputField" {...rest} />
  </div>
);

export default Field;
