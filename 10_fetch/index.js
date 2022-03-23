// to install and start a simple local webserver do followings:
// npm install -g http-server
// http-server -p 8080

// https://www.thecocktaildb.com/api.php
const options = {
    method: 'GET',
};

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita', options)
	.then(response => { console.log('then!!'); return response.json()})
	.then(response => console.log(response))
	.catch(err => console.error('catch:', err));

fetch('https://www.thecocktaildb.com/api/json/v1/1/noexisting', options)
    .then(response => { if (response.status == 200) { response.json(); } })
    .catch(err => console.error('Error catched!'));
