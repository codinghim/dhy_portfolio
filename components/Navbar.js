import Link from 'next/link'
import Styles from './styles/navbar.module.scss'

const Navbar = () => {
    return(
        <>
        {/* Navbar Logo */}
        <Link href="/">
            <a className={Styles.nav_logo}>Daniel Yun</a>
        </Link>

        {/* Navbar */}
        <nav id="navbar" className={Styles.nav}>
            <div className={Styles.navLink}></div>
            <div className={Styles.navLink_container}>
                <Link href="/">
                    <a className={Styles.navLink}>About</a>
                </Link>
                <Link href="/">
                    <a className={Styles.navLink}>Styles</a>
                </Link>
                <Link href="/">
                    <a className={Styles.navLink}>Services</a>
                </Link>
                <a href="#contactus" className={Styles.navLink}>Contact</a>
            </div>         
        </nav>

        
        </>
    )
}

export default Navbar;