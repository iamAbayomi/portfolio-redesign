import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { content } from '../../content'
import './portfolio.css'

function PortfolioPage (){
    const params : any = useParams()
    let portfolioContent : any
    const [portfolio, setPortfolio] = useState<any>()
    useEffect(()=>{
        getPortfolio()
    })
    
    function getPortfolio(){
        portfolioContent = content.find(item => {    
          return  item.pageUrl == params.pageUrl 
        })    
        setPortfolio(portfolioContent)
    }

    return(
        <div className="blog-section">
            {portfolio !=undefined ?
                <div className="blog-single-content">
                    <img className="blog-image" src={`/${portfolio.image}`} />
                    <p className="blog-title item-header">{portfolio.title}</p>
                    <p className="item-header">Overview</p>
                    <p>
                        {portfolio.description}
                    </p>
                    <div className="external-link-section">
                        <div className="websites-section">
                            <p className="small-heading">Website:</p>
                            <a href={portfolio.website} target="_blank" >https://iamabayomi-hacker-news-clone.netlify.app/</a>
                        </div>
                        <div className="sourcecode-section">
                            <p className="small-heading">Source Code</p>
                            <a href={portfolio.sourceCode} target="_blank" >https://github.com/iamAbayomi/react-hacker-news-clone</a>
                        </div>
                    </div>
                    <div className="section-space-divider"></div>
                    <p className="item-header">Problem Statement</p>
                    <p>
                        {portfolio.problemStatement}
                    </p>
                    <p className="item-header">Solution</p>
                    <p>
                    {portfolio.solution}
                    </p>
                    <p className="item-header">Lessons Learned</p>
                    <p>
                    {portfolio.lessonsLearned}

                    </p>
                </div>
             :<div/>}
        </div>
    )
}

export default PortfolioPage