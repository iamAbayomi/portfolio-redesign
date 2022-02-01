import { render } from "@testing-library/react";
import { useEffect } from "react";
import ReactGA from 'react-ga';

function Links(){
    useEffect(()=>{
        ReactGA.initialize('G-BLYSVQZ6GY');
    })
    return(
        <div>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" type="text/css" href="css/new.css" />
             {/* <link rel="stylesheet" type="text/css" href="css/cssreset.css"> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href={`https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,700;1,300&display=swap`} rel="stylesheet" />
            

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@oladiniabayomi" />
            <meta name="twitter:title" content="Abayomi's Website" />
            <meta name="twitter:description" content="A curation of my software development journey." />
            <meta name="twitter:image" content="https://oladiniabayomi.com/images/logo.png" />
``
            {/* <!-- Open Graph Link --> */}
            <meta property="og:title" content="Abayomi's Website" />
            <meta property="og:description" content="A curation of my software development journey." />
            <meta property="og:url" content="https://oladiniabayomi.com/" />
            <meta property="og:image" content="https://oladiniabayomi.com/images/logo.png" />
            {/* <!-- Open Graph Link --> */}
            <title>Abayomi's Website</title>
        </head>
        </div>
    )
}

export default Links