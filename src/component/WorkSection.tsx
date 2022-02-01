function WorkSection (){
    return(
        <div className="work-section">
                <p className="section-headline section-text">Some of my works</p>
                <div className="work-content">
                    <a href="/spiinge.html" className="no-underline" >
                    <div className="work-single-content">
                        <img className="work-image" src="images/spiinge.jpg" />
                        <p className="work-title item-header">Spiinge</p>
                        <p className="work-subtitle">Spiinge is web application allows you to manage your product ideas and 
                            track the product development stage.
                        </p>
                    </div>
                    </a>
                    <a href="/hacker-news-clone.html" className="no-underline">
                    <div className="work-single-content">
                        <img className="work-image" src="images/hacker-news.jpg"/>
                        <p className="work-title item-header">Hacker News Clone</p>
                        <p className="work-subtitle">This is a clone of the popular site hacker news and it is built with react.
                             It used the API provided by Hacker News hosted on Firebase. 
                        </p>
                    </div>
                    </a>
                </div>
            </div>
    )
}

export default WorkSection