/** React core **/
import React from 'react';

/** Styles **/
import styles from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
    const errorClass = props.error ? styles.error : '';
    const classNames = props.className ? props.className : '';
    const classes = `${ styles.input } ${ classNames } ${ errorClass }`.trim();

    return <input onChange={ props.onChange } className={ classes } ref={ ref } { ...props.input }
                  onKeyUp={ props.onKeyUp } />;
  }
);

export default Input;
