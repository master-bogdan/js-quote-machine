window.addEventListener('DOMContentLoaded', () => {

  const heading = document.querySelector('.heading');
  const btnLang = document.querySelector('.button-group');
  const btnGet = document.querySelector('#get');
  let language = 'ru';

	const API = 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&';

  const getQuote = async () => {
      try {
        const response = await fetch(`${API}lang=${language}`)

				const data = await response.json();

				if (data) {
					const out = document.querySelector('#out');
          out.innerHTML = `
              <div class="card">
								<div class="card-body">
									<p class="card-text"><i class="fas fa-quote-right"></i> ${data.quoteText} <i class="fas fa-quote-left"></i></p>
									<h6 id="author" class="card-subtitle mb-2 text-muted">&copy; ${data.quoteAuthor}</h6>
									<div class="social-container">
										<div class="fb-share-button" 
												data-href="https://master-bogdan.github.io/js-quote-machine/" 
												data-layout="button" 
												data-size="large">
													<a target="_blank" 
														href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmaster-bogdan.github.io%2Fjs-quote-machine%2F&amp;src=sdkpreparse&amp;quote=${data.quoteText} &copy; ${data.quoteAuthor}" class="fb-xfbml-parse-ignore btn-primary btn-fb">
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
				}
      } catch (error) {
				console.log('Fail', error);
				const out = document.querySelector('#out');
				out.textContent = `Something wrong :-(`;
      }
  }

  const setLang = (event) => {
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