import { PropsWithChildren } from 'react';

type SelectProps = {
  label: string;
  id: string;
};

/**
 * Represents a select field
 */
const Select = ({
  label,
  id,
  children,
  ...rest
}: JSX.IntrinsicElements['select'] & PropsWithChildren<SelectProps>) => (
  <div className="inputGroup">
    <label htmlFor={id}>{label}</label>
    <select id={id} className="inputField minimal" {...rest}>
      {children}
    </select>
  </div>
);

export default Select;
