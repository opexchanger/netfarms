import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar'
import NavbarMobile from '../../components/NavbarMobile';
import NavButtons from '../../components/NavButtons';

import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.separator}>
          <Navbar />
          <NavButtons />
          <NavbarMobile />
        </div>
      </div>
    </header>
  );
}