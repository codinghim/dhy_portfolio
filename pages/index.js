import Head from 'next/head'
import Image from 'next/image'
import Styles from '../styles/index.module.scss'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
        <Head>
            <title>Daniel Yun</title>
        </Head>
        <Layout>
            <section className={Styles.intro_section}>
                <div>
                    <p className={Styles.intro_text}>Hi, I&#39;m Daniel. <br />I am a web developer.</p>
                </div>
            </section>
            <section className={Styles.about_section} id="about_text">
                <div className={Styles.about_text_container}>
                    <div className={Styles.arrow_img_container}>
                        <a className={Styles.arrow_down} href="#about_text"></a>
                        {/* <img className={Styles.arrow_img} src="/images/comic_thumbnail.jpg"></img> */}
                    </div>
                    <p  className={Styles.about_text}>I am a web developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>


            <section className={Styles.skills_section}>
                <div className={Styles.skills_container}>
                    <p className={Styles.skills_title}>Skills</p>
                    <p className={Styles.skills_header}>Languages</p>
                    <p className={Styles.skills_text}>Python, JavaScript, Java</p>
                    <p className={Styles.skills_header}>Frameworks</p>
                    <p className={Styles.skills_text}>MERN Stack, Jquery, Sass, NextJS</p>
                    <p className={Styles.skills_header}>Database</p>
                    <p className={Styles.skills_text}>MySQL, MongoDB</p>
                </div>
            </section>


            <section className={Styles.experience_section}>
                    <p className={Styles.experience_section_title}>Experience</p>
                    <div>
                        <Image src={'/images/logo/magi_logo.png'} width={150} height={150} objectFit="fill"/>
                        <p className={Styles.experience_title}>Magi Web Production | 2020 - 2021</p>
                        <p className={Styles.experience_position}>Co-CEO and Software Developer</p>
                        <p className={Styles.experience_description}>A start-up company which provides web solutions to businesses</p>
                        <a href="https://company-website-coral.vercel.app/" target="_blank" rel="noopener noreferrer" className={Styles.hyperlink}>Visit Website</a>
                    </div>
            </section>
            <section className={Styles.portfolio_section}>
                <div className={Styles.portfolio_title_container}>
                    <p className={Styles.portfolio_title}>
                        Portfolio
                    </p>
                    <p className={Styles.portfolio_subtitle}>
                        Knowledge and skills
                    </p>
                </div>
                <div className={Styles.portfolio_grid}>
                    <a className={Styles.portfolio_grid_item} href="https://github.com/codinghim/team_white_308_thecomicverse" target="_blank" rel="noopener noreferrer">
                        <div className={Styles.portfolio_image_container}>
                            <Image src={`/images/comic_thumbnail.jpg`} width={350} height={250} objectFit="fill"/>
                            <div className={Styles.portfolio_grid_item_hover}>
                                <div className={Styles.portfolio_grid_item_hover_title}>
                                    View
                                </div>
                            </div>
                        </div>
                        <div className={Styles.portfolio_image_title_container}>
                            <p className={Styles.portfolio_image_title}>The ComicVerse</p>
                            <p className={Styles.portfolio_image_subtitle}>Project Description</p>
                        </div>
                        
                    </a>
                    <a className={Styles.portfolio_grid_item} href="https://github.com/codinghim/company_website" target="_blank" rel="noopener noreferrer">
                        <div className={Styles.portfolio_image_container}>
                            <Image src={`/images/magi_thumbnail.png`} width={350} height={250} objectFit="fill"/>
                            <div className={Styles.portfolio_grid_item_hover}>
                                <div className={Styles.portfolio_grid_item_hover_title}>
                                    View
                                </div>
                            </div>
                        </div>
                        <div className={Styles.portfolio_image_title_container}>
                            <p className={Styles.portfolio_image_title}>Magi Website</p>
                            <p className={Styles.portfolio_image_subtitle}>project and description</p>
                        </div>
                    </a>
                    <a className={Styles.portfolio_grid_item} href="https://github.com/codinghim/company_website" target="_blank" rel="noopener noreferrer">
                        <div className={Styles.portfolio_image_container}>
                            <Image src={`/images/cyber_security_thumbnail.jpg`} width={350} height={250} objectFit="fill"/>
                            <div className={Styles.portfolio_grid_item_hover}>
                                <div className={Styles.portfolio_grid_item_hover_title}>
                                    View
                                </div>
                            </div>
                        </div>
                        <div className={Styles.portfolio_image_title_container}>
                            <p className={Styles.portfolio_image_title}>Website Templates</p>
                            <p className={Styles.portfolio_image_subtitle}>project and description</p>
                        </div>
                    </a>
                    <a className={Styles.portfolio_grid_item} href="https://github.com/codinghim/company_website" target="_blank" rel="noopener noreferrer">
                        <div className={Styles.portfolio_image_container}>
                            <Image src={`/images/cyber_security_thumbnail.jpg`} width={350} height={250} objectFit="fill"/>
                            <div className={Styles.portfolio_grid_item_hover}>
                                <div className={Styles.portfolio_grid_item_hover_title}>
                                    View
                                </div>
                            </div>
                        </div>
                        <div className={Styles.portfolio_image_title_container}>
                            <p className={Styles.portfolio_image_title}>Flash Cards</p>
                            <p className={Styles.portfolio_image_subtitle}>project and description</p>
                        </div>
                    </a>
                    <a className={Styles.portfolio_grid_item} href="https://github.com/codinghim/CSE363-Cyber-Security-Attacks" target="_blank" rel="noopener noreferrer">
                        <div className={Styles.portfolio_image_container}>
                            <Image src={`/images/cyber_security_thumbnail.jpg`} width={350} height={250} objectFit="fill"/>
                            <div className={Styles.portfolio_grid_item_hover}>
                                <div className={Styles.portfolio_grid_item_hover_title}>
                                    View
                                </div>
                            </div>
                        </div>
                        <div className={Styles.portfolio_image_title_container}>
                            <p className={Styles.portfolio_image_title}>Cyber Security Attacks</p>
                            <p className={Styles.portfolio_image_subtitle}>project and description</p>
                        </div>
                    </a>
                </div>
            </section>
        </Layout>
        </>
  )
}
