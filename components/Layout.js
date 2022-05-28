import Navbar from "./Navbar"
import Footer from "./Footer"
import Styles from './styles/footer.module.scss'

const Layout = ({children}) => {
    return(
        <>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </>
    )
}

export default Layout