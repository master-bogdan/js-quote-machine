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
                        <div class="social-container">
                            <div class="fb-share-button btn-primary" 
                                data-href="https://master-bogdan.github.io/js-quote-machine/" 
                                data-layout="button" 
                                data-size="large">
                                    <a target="_blank" 
                                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmaster-bogdan.github.io%2Fjs-quote-machine%2F&amp;src=sdkpreparse&amp;quote=${data.quoteText} (c) ${data.quoteAuthor}" class="fb-xfbml-parse-ignore">
                                    <i class="fab fa-facebook"></i> Поделиться
                                    </a>
                            </div>
                            <div class="twitter-container">
                                <a class="twitter-share-button btn-primary"
                                    href="https://twitter.com/intent/tweet?hashtags=quotes,цитаты&related=masterbogdan&text=${data.quoteText} (c) ${data.quoteAuthor}"
                                    target="_blank"
                                    >
                                    <i class="fab fa-twitter"></i>
                                    Твитнуть
                                </a>
                            </div>
                        </div>
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
            // fbBtn.innerHTML = 'Поделится';
            // twBtn.innerHTML = 'Твитнуть';
            
        } 
        else { 
            heading.textContent = 'Random quote site';
            btnGet.textContent = 'Get random quote';
            // fbBtn.innerHTML = 'Share';
            // twBtn.innerHTML = 'Tweet';
        }
    }

    btnLang.addEventListener('click', setLang);
    btnGet.addEventListener('click', getQuote);
});