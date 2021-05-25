/** React core **/
import React from 'react';

/** Styles **/
import styles from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
    const errorClass = props.error ? styles.error : '';

    return <input onChange={ props.onChange } className={ `${ styles.input } ${ props.className } ${ errorClass }` }
                  ref={ ref } { ...props.input } onKeyUp={ props.onKeyUp } />;
  }
);

export default Input;
