/** React core **/
import React from 'react';

/** Styles **/
import styles from './Container.module.scss';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={`${styles.container}`}>{children}</div>
);

export default Container;
