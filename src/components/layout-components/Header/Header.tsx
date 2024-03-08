import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>Skill Tester</div>
                <nav className={styles.navigation}>
                    <ul className={styles.navList}>
                        <li className="navItem">lorem</li>
                        <li className="navItem">lorem 2</li>
                        <li className="navItem">lorem 3</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
