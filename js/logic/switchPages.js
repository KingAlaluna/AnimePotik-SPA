import {html, data} from '../data/config.js';
import {clearAnime, pagTextContent, startAnime} from './animeRenderList.js';
import {clearFilter} from './pages/animeFilter.js';


//switch pages
export function noneAllPage(props) {
  html.allPage.forEach(e => {
    const dataPage = e.dataset.page;
    if (props.check) {
      if (dataPage == props.check) {
        e.classList.toggle('active');
      }
    } else {
      if (dataPage != props.page) {
        e.classList.remove('active');
      } else {
        e.classList.add('active');
      }
    }
  });
  if (props.clear) {
    clearAnime();
    clearFilter();
    data.paginationPage = 1;
    pagTextContent();
    startAnime();
  }
  data.animeSort = false;
  html.inputSearch.value = '';
  data.animeSearch = false;
}
