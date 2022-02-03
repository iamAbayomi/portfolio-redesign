import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { content } from '../content'
function WorkSection (){
    return(
        <div className="work-section">
                <p className="section-headline section-text">Some of my works</p>
                <div className="work-content">
                    {content.map((portfolio: any) =>(
                        <Link to={`/work/${portfolio.pageUrl}`} className="no-underline" >
                        <div className="work-single-content">
                            <img className="work-image" src={portfolio.image} />
                            <p className="work-title item-header">{portfolio.title}</p>
                            <p className="work-subtitle">
                                {portfolio.description}
                            </p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
    )
}

export default WorkSection