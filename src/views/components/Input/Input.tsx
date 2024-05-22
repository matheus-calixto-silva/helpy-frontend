import { IInputProps } from '../../../types';

import styles from './Input.module.css';

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
}: IInputProps) => (
  <div className={styles.wrapper}>
    <label className={`b3 ${styles.label}`} htmlFor={name}>
      {label}
    </label>
    <input
      className={styles.input}
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <p className={styles.error}>{error}</p>}
  </div>
);

export default Input;
