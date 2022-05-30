import Link from 'next/link'
import { useEffect } from 'react';
import Styles from './styles/navbar.module.scss'

const Navbar = () => {
    useEffect(() =>{
        let prevScrollPosition = 0;
        window.onscroll= () =>{
            let currentScrollPosition = document.documentElement.scrollTop
            let px = window.innerHeight*0.12 //12vh in px
            let offsetHeight = document.getElementById('navbar').offsetHeight
            //if scrolltop is more than 12vh show navbar
            if(currentScrollPosition>prevScrollPosition){
                document.getElementById('navbar').style.transform = "none";
            }else{
                document.getElementById('navbar').style.transform = "none";
                document.getElementById('navbar').style.transform = "translateY(-12vh)";
            }
            
            // if(currentScrollPosition > prevScrollPosition){
            //     //hide navbar when scrolling down
            //     if( document.documentElement.clientWidth < 540){ 
            //         //on mobile of width less than 540px
            //         document.getElementById('navbar_m').style.transform = "translateY(-8vh)";
            //     }else if( document.documentElement.clientWidth < 768 ){ 
            //         //on mobile of width greater than 540px
            //         document.getElementById('navbar').style.transform = "translateY(-8vh)"; //change inside to the height of navbar located in /styles/lib/var.scss
            //     }else{ 
            //         //on larger screen
            //         document.getElementById('navbar').style.transform = "translateY(-12vh)"; //change inside to the height of navbar located in /styles/lib/var.scss
            //     }
            // }else{
            //     //hide navbar when scrolling down
            //     if( document.documentElement.clientWidth < 540){
            //         document.getElementById('navbar_m').style.transform = "none";
            //     }else{
            //         document.getElementById('navbar').style.transform = "none";
            //     }
                
            // }
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
                <Link href="/">
                    <a className={Styles.navLink}>Menu1</a>
                </Link>
                <Link href="/">
                    <a className={Styles.navLink}>Menu2</a>
                </Link>
                <Link href="/">
                    <a className={Styles.navLink}>Menu3</a>
                </Link>
                <a href="#contactus" className={Styles.navLink}>Contact</a>
            </div>         
        </nav>

        
        </>
    )
}

export default Navbar;