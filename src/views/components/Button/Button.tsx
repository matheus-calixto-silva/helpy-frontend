/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: IButtonProps) => (
  <button {...props} className={styles.button}>
    {children}
  </button>
);

export default Button;
