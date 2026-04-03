import {html, data, c} from '../../data/config.js';
import {allFilter} from '../../data/filterAnime.js';
import {clearAnime, pagTextContent, sortTopAnime, sortAnime} from '../animeRenderList.js';


//clear filter
export function clearFilter() {
  Object.keys(data.anime).forEach(e => {
    data.anime[e] = null;
  });
}


//add filter btn
html.wrapFilterAnime.forEach(e => {
  const type = e.dataset.type;
  e.insertAdjacentHTML('beforeend', allFilter[type].join(''));
});
html.btnFilterAnime = c('btn-filter-anime');


//templates url filters
const urlTemplates = (value) => ({
  years: `start_date=${encodeURIComponent(value)}-01-01&end_date=${encodeURIComponent(value)}-12-31`,
  types: `type=${encodeURIComponent(value)}`,
  genres: `genres=${encodeURIComponent(value)}`,
  studios: `producers=${encodeURIComponent(value)}`
});


//click btn filter
html.btnFilterAnime.forEach(e => {
  e.addEventListener('click', async () => {
    clearAnime();
    clearFilter();
    data.paginationPage = 1;
    pagTextContent();
    
    
    const type = e.dataset.type;
    const filter = e.dataset.filter;
    const text = e.textContent;
    const url = urlTemplates(filter);
    
    data.anime[type] = filter;
    
    html.textTopAnime.textContent = `Топ 25 ${text}:`;
    html.textRecomendAnime.textContent = `Рекомендую ${text}:`;
    
    data.serverTopAnime = await fetch(`https://api.jikan.moe/v4/anime?${url[type]}&order_by=score&sort=desc`);
    data.serverAnime = await fetch(`https://api.jikan.moe/v4/anime?${url[type]}&page=${encodeURIComponent(data.paginationPage)}`);
    
    sortTopAnime();
    sortAnime();
  });
});

