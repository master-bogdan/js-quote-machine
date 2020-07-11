window.addEventListener('DOMContentLoaded', () => {

    let res = fetch("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/", {
        // "mode": "no-cors",
        "headers": {
            "Content-type": "application/x-www-form-urlencoded"
        },
        "body": "method=getQuote&format=json&key=&lang=ru",
        "method": "POST"
        })
        .then(response => response.json())
        .then(data => {
            const out = document.querySelector('#out');
            out.insertAdjacentHTML('afterbegin', `
            <div class="jumbotron">
                <h1 class="display-4">${data.quoteAuthor}</h1>
                <p class="lead">${data.quoteText}</p>
                <hr class="my-4">
            </div>
            `);
        })
        .catch(error => console.log('Fail', error));

});