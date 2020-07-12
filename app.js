window.addEventListener('DOMContentLoaded', () => {

    const btnLang = document.querySelector('.button-group');
    const btnGet = document.querySelector('#get');

    function getQuote() {
        let res = fetch("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/", {
        // "mode": "no-cors",
        "headers": {
            "Content-type": "application/x-www-form-urlencoded"
        },
        "body": `method=getQuote&format=json&key=&lang=ru`,
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
    }

    function setLang(event) {
        if (event.target.classList.contains('btn')) {
            let data = event.target.getAttribute('data-lang');
            console.log(data);
            return data;
        }
        
    }

    btnLang.addEventListener('click', setLang);
    btnGet.addEventListener('click', getQuote);
});