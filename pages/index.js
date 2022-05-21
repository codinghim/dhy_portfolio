import Head from 'next/head'
import Image from 'next/image'
import Styles from '../styles/index.module.scss'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
        <Head>
            <title>Daniel Yun</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <Layout>
            <section className={Styles.intro_section}>
                <div>
                    <p className={Styles.intro_text}>Hi, I'm Daniel. <br />I am a web developer.</p>
                </div>
            </section>
            <section className={Styles.about_section}>
                <div className={Styles.about_text_container}>
                    <div className={Styles.arrow_img_container}>
                    <img className={Styles.arrow_img} src="/images/comic_thumbnail.jpg"></img>
                    </div>
                    <p className={Styles.about_text}>I am a web developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>
            <section className={Styles.skills_section}>
                <div>
                    <p>Full Stack Devopers</p>
                    <p>Languages</p>
                    <p>Python, JavaScript, Java</p>
                    <p>Frameworks</p>
                    <p>MERN Stack, Jquery, Sass, NextJS</p>
                    <p>Database</p>
                    <p>MySQL, MongoDB</p>
                </div>
            </section>
            <section className={Styles.experience_section}>
                <div>
                    <p>Experience</p>
                    <p>Magi Web Production | 2020 - 2021</p>
                    <p>Co-CEO & Software Developer</p>
                    <p>A start-up company which provides web solutions to businesses</p>
                    <p>https://company-website-coral.vercel.app/</p>
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
                    <a className={Styles.portfolio_grid_item} href="https://github.com/codinghim/team_white_308_thecomicverse">
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
                    <div className={Styles.portfolio_grid_item}>
                        <div className={Styles.portfolio_image_container}>
                            <Image src={`/images/cyber_security_thumbnail.jpg`} width={350} height={250} objectFit="fill"/>
                            <div className={Styles.portfolio_grid_item_hover}>
                                <div className={Styles.portfolio_grid_item_hover_title}>
                                    View
                                </div>
                            </div>
                        </div>
                        <div className={Styles.portfolio_image_title_container}>
                            <p className={Styles.portfolio_image_title}>Project project 2</p>
                            <p className={Styles.portfolio_image_subtitle}>project and description</p>
                        </div>
                    </div>
                    <div className={Styles.portfolio_grid_item}>
                        <div className={Styles.portfolio_image_container}>
                            <Image src={`/images/cyber_security_thumbnail.jpg`} width={350} height={250} objectFit="fill"/>
                            <div className={Styles.portfolio_grid_item_hover}>
                                <div className={Styles.portfolio_grid_item_hover_title}>
                                    View
                                </div>
                            </div>
                        </div>
                        <div className={Styles.portfolio_image_title_container}>
                            <p className={Styles.portfolio_image_title}>Project project 2</p>
                            <p className={Styles.portfolio_image_subtitle}>project and description</p>
                        </div>
                    </div>
                    <div className={Styles.portfolio_grid_item}>
                        <div className={Styles.portfolio_image_container}>
                            <Image src={`/images/cyber_security_thumbnail.jpg`} width={350} height={250} objectFit="fill"/>
                            <div className={Styles.portfolio_grid_item_hover}>
                                <div className={Styles.portfolio_grid_item_hover_title}>
                                    View
                                </div>
                            </div>
                        </div>
                        <div className={Styles.portfolio_image_title_container}>
                            <p className={Styles.portfolio_image_title}>Project project 2</p>
                            <p className={Styles.portfolio_image_subtitle}>project and description</p>
                        </div>
                    </div>
                    <div className={Styles.portfolio_grid_item}>
                        <div className={Styles.portfolio_image_container}>
                            <Image src={`/images/cyber_security_thumbnail.jpg`} width={350} height={250} objectFit="fill"/>
                            <div className={Styles.portfolio_grid_item_hover}>
                                <div className={Styles.portfolio_grid_item_hover_title}>
                                    View
                                </div>
                            </div>
                        </div>
                        <div className={Styles.portfolio_image_title_container}>
                            <p className={Styles.portfolio_image_title}>Project project 2</p>
                            <p className={Styles.portfolio_image_subtitle}>project and description</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
        </>
  )
}
