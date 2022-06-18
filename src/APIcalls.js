export const getRandomWord = () => {
    return fetch('https://random-word-api.herokuapp.com/word')
    .then(response => response.json())
 }