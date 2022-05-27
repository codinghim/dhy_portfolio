import Styles from './styles/footer.module.scss'
import Image from 'next/image'

const Footer = () => {
    return(
        <>
            <footer id="contactus" className={Styles.footer}>
               <div className={Styles.icons_container}>
                    <a href="https://github.com/codinghim"><Image src={"/images/logo/GitHub-Mark.png"} width={40} height={40}/></a>
                </div>
                <p className={Styles.copyright}>Copyright &copy; 2022 Daniel Himchan Yun <br />All rights reserved</p>
            </footer>
        </>
    )
}

export default Footer;