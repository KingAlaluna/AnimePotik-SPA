import {html, data} from '../../data/config.js';
import {clearAnime, pagTextContent, sortTopAnime, sortAnime} from '../anime-render-list.js';
import {clearFilter} from './anime-filter.js';


//search anime
export async function performSearch() {
  const query = html.inputSearch.value.trim();
  if (query) {
    data.querys = query;
    clearAnime();
    clearFilter();
    data.paginationPage = 1;
    pagTextContent();
    
    html.textTopAnime.textContent = 'Топ 25 ' + query + ':';
    html.textRecomendAnime.textContent = 'Рекомендую ' + query + ':';
    
    try {
      data.serverTopAnime = await fetch('https://api.jikan.moe/v4/anime?q=' + encodeURIComponent(query) + '&order_by=score&sort=desc');
      data.serverAnime = await fetch('https://api.jikan.moe/v4/anime?q=' + encodeURIComponent(query));
      
      sortTopAnime();
      sortAnime();
    } catch (e) {
      console.error("Помилка пошуку");
    }
    
    html.inputSearch.blur();
    data.animeSearch = true;
  }
}


html.inputSearch.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});
