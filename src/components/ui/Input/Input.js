/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

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

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool.isRequired,
  input: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
}

Input.displayName = 'Input';

export default Input;
