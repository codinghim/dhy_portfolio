const fs = require('fs')
import path from 'path'

export const getPortfolio = async () => {
    const jsonDirectory = path.join(process.cwd(), '/portfolio/portfolio.json');
    return fs.readFileSync(jsonDirectory, 'utf8') 
}