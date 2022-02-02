import {Link} from 'react-router-dom'

function Header(){
    return(
        <div>
            {/* <header> */}
            <Link className="no-underline"  to={'/'}>
                <p className="home-icon">O.A</p>
            </Link>
            <div id="top-bar" className="nav-id">
                <a href="https://www.blog.oladiniabayomi.com" target="_blank">BLOG</a>
            </div>
        {/* </header> */}
        </div>
    )
}

export default Header