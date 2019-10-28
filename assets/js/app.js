const apps = [
    {
        appName: "shyBand",
        src: "./assets/img/shyband.png",
        alt: "a screenshot of two people messaging each other",
        title: "Shy Band",
        description: "A full-stack MERN web app that helps shy musicians meet each other and form a band.",
        gitHub: "https://github.com/jacksonopp/shyBand",
        appLink: "https://lit-harbor-52969.herokuapp.com"
    },
    {
        appName: "eatDaBurger",
        src: "./assets/img/eatDaBurger.png",
        alt: "a screenshot of web app",
        title: "Eat Da Burger",
        description: "A full-stack MySQL and Express based web app that allows you to enter the name of a burger and then devour it.",
        gitHub: "https://github.com/jacksonopp/eat-da-burger",
        appLink: "https://eat-da-burger-jacksonopp.herokuapp.com/"
    },
    {
        appName: "friendFinder",
        src: "./assets/img/friendFinder.png",
        alt: "a screenshot of a friend finder app",
        title: "Friend Finder",
        description: "An express.js web-app that finds your best new friend.",
        gitHub: "https://github.com/jacksonopp/friend-finder",
        appLink: "https://friend-finder-jacksonopp.herokuapp.com/"
    },
    {
        appName: "trackTrek",
        src: "./assets/img/trackTrek.png",
        alt: "a screenshot of a music playlist app",
        title: "TrackTrek",
        description: "An app to create a playlist based on drive time.",
        gitHub: "https://github.com/jacksonopp/TeamCharmander",
        appLink: "https://jacksonopp.github.io/TeamCharmander/"
    },
    {
        appName: "newsScrape",
        src: "./assets/img/newsScrape.png",
        alt: "a screenshot of a news web app",
        title: "newsScrape",
        description: "A full-stack Mongo and Express based news web app that lets users comment on articles.",
        gitHub: "https://github.com/jacksonopp/newsScrapeReact",
        appLink: "https://news-scrape-jacksonopp.herokuapp.com/"
    },
    {
        appName: "gifTastic",
        src: "./assets/img/gifTastic.png",
        alt: "a screenshot of a gif search engine",
        title: "Gif Tastic!",
        description: "Look up gifs of your favorite comedians (or anything else) using the giphy API.",
        gitHub: "https://github.com/jacksonopp/GifTastic",
        appLink: "https://jacksonopp.github.io/GifTastic/"
    },
    {
        appName: "triviaGame",
        src: "./assets/img/triviaGame.png",
        alt: "a screenshot of a coen brothers trivia game",
        title: "Coen Brothers Trivia Game",
        description: "A timed trivia quiz about the Cohen Brothers. How much do you know about the filmmaking duo?",
        gitHub: "https://github.com/jacksonopp/triviaGame",
        appLink: "https://jacksonopp.github.io/triviaGame/"
    },
    {
        appName: "redLightGreenLight",
        src: "./assets/img/rlgl.png",
        alt: "a screenshot of web app",
        title: "Red Light Green Light",
        description: "A full-stack MySQL and Express based social media web app that connects car enthusiasts to each other.",
        gitHub: "https://github.com/jacksonopp/justice-league",
        appLink: "https://jl-testing.herokuapp.com/"
    },
    {
        appName: "nyt search",
        src: "./assets/img/nytSearch.png",
        alt: "a screenshot of an app for searching the New York Times",
        title: "New York Times Search",
        description: "Search for articles using the New York Times API.",
        gitHub: "https://github.com/jacksonopp/nytSearch",
        appLink: "https://jacksonopp.github.io/nytSearch/"
    },
    {
        appName: "trainTime",
        src: "./assets/img/trainTime.png",
        alt: "a screenshot of a train time calculator",
        title: "Train Time",
        description: "Input train frequency and arrival times, and the app will calculate when the next scheduled arrival is. Using localForage, the app remembers your trains from previous sessions.",
        gitHub: "https://github.com/jacksonopp/trainTime",
        appLink: "https://jacksonopp.github.io/trainTime/"
    },
    {
        appName: "word guess",
        src: "./assets/img/hangman.png",
        alt: "a screenshot of a hangman game",
        title: "Die wundersame Herausforderung der Bierstile!",
        description: "A simple hangman-style game where you try to guess different beer styles.",
        gitHub: "https://github.com/jacksonopp/word-guess-game",
        appLink: "https://jacksonopp.github.io/word-guess-game/"
    }
]

function makeCards() {
    for (let i = 0; i < apps.length; i++) {
        //make <div class="card">
        const card = document.createElement("div");
        card.classList.add("card");
        //img
        const cardImg = document.createElement("img");
        cardImg.setAttribute("src", apps[i].src);
        cardImg.setAttribute("alt", apps[i].alt)
        cardImg.classList.add("card-img-top");
        card.append(cardImg);
        //card body
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.append(cardBody);
        //card title
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = apps[i].title;
        cardBody.append(cardTitle);
        //card text
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = apps[i].description;
        cardBody.append(cardText);
        //githubLink
        const githubLink = document.createElement("a");
        githubLink.classList.add("btn", "btn-outline-success", "mr-1");
        githubLink.setAttribute("href", apps[i].gitHub);
        githubLink.setAttribute("target", "_blank");
        githubLink.innerText = "Github";
        cardBody.append(githubLink);
        //app link
        const appLink = document.createElement("a");
        appLink.classList.add("btn", "btn-outline-primary");
        appLink.setAttribute("href", apps[i].appLink);
        appLink.setAttribute("target", "_blank");
        appLink.innerText = "View App";
        cardBody.append(appLink);

        document.getElementById("card-columns").append(card);

    }
}
makeCards();