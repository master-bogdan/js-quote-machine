window.addEventListener('DOMContentLoaded', () => {

    let res = fetch("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/", {
        // "mode": "no-cors",
        "headers": {
            "Content-type": "application/x-www-form-urlencoded"
        },
        "body": "method=getQuote&format=json&key=&lang=en",
        "method": "POST"
        })
        .then(response => response.json())
        .then(data => {
            const out = document.querySelector('#out');
            out.insertAdjacentHTML('afterbegin', `
                <h1 class="display-4">"${data.quoteText}"</h1>
                <p class="lead">${data.quoteAuthor}</p>
                <hr class="my-4">
            `);
        })
        .catch(error => console.log('Fail', error));

// console.log(res);
});