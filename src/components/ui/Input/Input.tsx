/** React core **/
import React, { ForwardedRef } from 'react';

/** Styles **/
import styles from './Input.module.scss';

type InputProps = {
  ref: ForwardedRef<HTMLInputElement>;
  error: boolean;
  className: string;
  input: { id: string; type: string };
  onChange: () => void;
  onKeyUp: (e: React.KeyboardEvent) => Promise<void>;
};

const Input: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, onChange, input, onKeyUp }, ref: ForwardedRef<HTMLInputElement>) => {
    const errorClass = error ? styles.error : '';
    const classNames = className || '';
    const classes = `${styles.input} ${classNames} ${errorClass}`.trim();

    return <input onChange={onChange} className={classes} ref={ref} {...input} onKeyUp={onKeyUp} />;
  },
);

Input.displayName = 'Input';

export default Input;
