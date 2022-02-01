function PortfolioPage (){
    return(
        <div className="blog-section">
                <div className="blog-single-content">
                    <img className="blog-image" src="/images/hacker-news.jpg" />
                    <p className="blog-title item-header">Hacker News Clone</p>
                    <p className="item-header">Overview</p>
                    <p>
                        Hacker News Clone is a clone of the popular site hacker news.  It is built with react. 
                        It used the API provided by Hacker News hosted on Firebase.
                    </p>
                    <div className="external-link-section">
                        <div className="websites-section">
                            <p className="small-heading">Website:</p>
                            <a href="https://iamabayomi-hacker-news-clone.netlify.app/" target="_blank" >https://iamabayomi-hacker-news-clone.netlify.app/</a>
                        </div>
                        <div className="sourcecode-section">
                            <p className="small-heading">Source Code</p>
                            <a href="https://github.com/iamAbayomi/react-hacker-news-clone" target="_blank" >https://github.com/iamAbayomi/react-hacker-news-clone</a>
                        </div>
                    </div>
                    <div className="section-space-divider"></div>
                    <p className="item-header">Problem Statement</p>
                    <p>
                        This is the solution to the six fun react projects. The application was meant to give developers practice with lists of 
                        components and fetching data from the Hacker News API.
                    </p>
                    <p className="item-header">Solution</p>
                    <p>
                        I built the application in React and used Axios to fetch data from the Hacker News Firebase API. 
                    </p>
                    <p className="item-header">Lessons Learned</p>
                    <p>
                        React only updates what has changed in the real DOM. The process of comparing the old VDOM which is the abstraction layer react adds on the real DOM with the new one is diffing. I made the mistake of using forceUpdate() instead of simply using setState at the end of the API request.
                        Real DOM updates are slow because they cause an actual re-draw of the UI. React makes this more efficient by updating the smallest amount possible in the real DOM.
                        It is easy to deploy on Netlify with some command-line commands.

                    </p>
                </div>
            </div>
    )
}

export default PortfolioPage