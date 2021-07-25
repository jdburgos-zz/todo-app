/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Container.module.scss';

const Container = props => (
  <div className={`${ styles.container }`}>{props.children}</div>
);

Container.propTypes = {
  children: PropTypes.any
}

export default Container;
