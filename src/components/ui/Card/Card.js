/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Card.module.scss';

const Card = props => <div className={ `${ styles.card } ${ props.className }` }>{ props.children }</div>;

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

export default Card;
