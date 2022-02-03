
export const content = [
{
    image: "images/spiinge.jpg",
    title: "Spiinge",
    description: "Spiinge is a web application that manages product ideas and tracks the product development stage.",
    website: `https://www.spiinge.com`,
    sourceCode: `https://github.com/iamAbayomi/kms`,
    problemStatement: `I wanted to create a web application that allowed users to use the lean development process, 
    Understand their progress through the development stages.`,
    usersFeedback: `Several users agreed to use the application during the customer interviews. The existing application 
    they used was Evernote, Asana. Most users used the free plan. We received positive feedback from users.`,
    solution: `Spiinge was built with Nuxtjs framework. It used Vuejs as the front-end framework and Nodejs, 
    SQL Database for the local database, Express, Google Cloud GCP and PostgreSQL for the production database hosted on Heroku.`,
    lessonsLearned: `I learnt that anything can be built. The value is in the benefits the product offers to the users. I also learnt that the web 
    application should be tested frequently with users to guide the development team.`,
    pageUrl: 'spiinge'
    
},
{
    image: "images/hacker-news.jpg",
    title: "Hacker News Clone",
    description: `Hacker News Clone is a clone of the popular site hacker news.  It is built with react. 
    It used the API provided by Hacker News hosted on Firebase.`,
    website: `https://iamabayomi-hacker-news-clone.netlify.app/`,
    sourceCode: `https://github.com/iamAbayomi/react-hacker-news-clone`,
    problemStatement: `This is the solution to the six fun react projects. The application was meant to give developers practice with lists of 
    components and fetching data from the Hacker News API.`,
    solution: `I built the application in React and used Axios to fetch data from the Hacker News Firebase API. `,
    lessonsLearned: `React only updates what has changed in the real DOM. The process of comparing the old VDOM which is the abstraction layer
    react adds on the real DOM with the new one is diffing. I made the mistake of using forceUpdate() instead of simply using setState at the end of the API request.
    Real DOM updates are slow because they cause an actual re-draw of the UI. React makes this more efficient by updating the smallest amount possible in the real DOM.
    It is easy to deploy on Netlify with some command-line commands.`,
    pageUrl: 'hacker-new-clone'
    
},



]