import React from 'react'
import Styles from './styles/portfolio.module.scss'
import Image from 'next/image'

const Portfolio = ({portfolio}) => {
    return (
        <a className={Styles.portfolio_grid_item} href={portfolio.href} target="_blank" rel="noopener noreferrer" data-aos="fade-up">
            <div className={Styles.portfolio_image_container}>
                <Image src={portfolio.image_src} alt={portfolio.title} width={350} height={250} objectFit="fill"/>
                <div className={Styles.portfolio_grid_item_hover}>
                    <div className={Styles.portfolio_image_title_container}>
                        <p className={Styles.portfolio_image_title}>{portfolio.title}</p>
                        <p className={Styles.portfolio_image_subtitle}>
                            {portfolio.excerpt}
                        </p>
                        <p className={Styles.portfolio_image_subtitle}>
                            {portfolio.list}
                        </p>
                    </div>
                </div>
            </div>
            
        </a>
    )
}


export default Portfolio