import Link from 'next/link'
import { useEffect } from 'react';
import Styles from './styles/navbar.module.scss'

const Navbar = () => {
    useEffect(() =>{
        let prevScrollPosition = 0;
        window.onscroll= () =>{
            let currentScrollPosition = document.documentElement.scrollTop
            //if scrolltop is more than 12vh show navbar
            if(currentScrollPosition == 0){
                document.getElementById('navbar').style.transform = "translateY(-12vh)";
            }else if(currentScrollPosition>prevScrollPosition){
                document.getElementById('navbar').style.transform = "translateY(-12vh)";
            }else{
                document.getElementById('navbar').style.transform = "none";
            }
            prevScrollPosition = document.documentElement.scrollTop
        }
    })
    
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
                <Link href="#portfolio">
                    <a className={Styles.navLink}>Portfolio</a>
                </Link>
                <Link href="#experience">
                    <a className={Styles.navLink}>Experience</a>
                </Link>
                <Link href="#skills">
                    <a className={Styles.navLink}>Skills</a>
                </Link>
                <a href="#contactus" className={Styles.navLink}>Contact</a>
            </div>         
        </nav>

        
        </>
    )
}

export default Navbar;