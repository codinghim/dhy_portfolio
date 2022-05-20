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
                <div className={Styles.main_image_container}>
                    Hello
                </div>
                <div className={Styles.main_image_container}>
                    Hello
                </div>
                <div className={Styles.main_image_container}>
                    Hello
                </div>
                <div className={Styles.main_image_container}>
                    Hello
                </div>
                <div className={Styles.main_image_container}>
                    Hello
                </div>
                <div className={Styles.main_image_container}>
                    Hello
                </div>
                <div className={Styles.main_image_container}>
                    Hello
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
                </div>
            </section>
        </Layout>
        </>
  )
}
