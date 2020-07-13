window.addEventListener('DOMContentLoaded', () => {

    const heading = document.querySelector('.heading');
    const btnLang = document.querySelector('.button-group');
    const btnGet = document.querySelector('#get');
    let colors = [];
    let language = 'ru';

    function getQuote() {
        let res = fetch("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/", {
        // "mode": "no-cors",
        "headers": {
            "Content-type": "application/x-www-form-urlencoded"
        },
        "body": `method=getQuote&format=json&key=&lang=${language}`,
        "method": "POST"
        })
        .then(response => response.json())
        .then(data => {
            const out = document.querySelector('#out');
            out.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">${data.quoteText}</p>
                        <h6 id="author" class="card-subtitle mb-2 text-muted">${data.quoteAuthor}</h6>
                        <a href="#" class="card-link">Card link</a>
                        <a class="twitter-share-button"
                            href="https://twitter.com/intent/tweet?text=${data.quoteText}">
                        Tweet</a>
                    </div>
                </div>
            `;
        })
        .catch(error => console.log('Fail', error));
    }

    function setLang(event) {
        if (event.target.classList.contains('btn')) {
            let data = event.target.getAttribute('data-lang');
            language = data;
        }
        if (language === 'ru') {
            heading.textContent = 'Сайт случайной цитаты';
            btnGet.textContent = 'Получить случайную цитату';
        } 
        else { 
            heading.textContent = 'Random quote site';
            btnGet.textContent = 'Get quote';
        }
    }

    btnLang.addEventListener('click', setLang);
    btnGet.addEventListener('click', getQuote);
});