/** React core **/
import React from 'react';

/** Components **/
import Container from '../layout/Container/Container';

/** Styles **/
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <picture className={styles['header__background']}>
      <source
        media="(min-width: 576px)"
        srcSet={`${process.env.PUBLIC_URL}/images/bg-desktop-light.jpg`}
      />
      <img src={`${process.env.PUBLIC_URL}/images/bg-mobile-light.jpg`} alt="Todo app" />
    </picture>
    <Container>
      <div>
        <h1 className={styles['header__title']}>TODO</h1>
        <div className={styles['theme-switch']}></div>
      </div>
    </Container>
  </header>
);

export default Header;
