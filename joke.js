const jokeBtn = document.querySelector('#joke-btn');
const jokeDiv = document.querySelector('#joke');


const generateNewJoke = () => {

    fetch('https://api.chucknorris.io/jokes/random')
    .then((res) => res.json())
    .then((data) => {
        createNewJoke(data.value)
    })
}

const createNewJoke = (joke) => {
    jokeDiv.textContent = joke;
}


jokeBtn.addEventListener('click', generateNewJoke);
