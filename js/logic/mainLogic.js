import './scrollPages.js';

import {html} from '../data/config.js';
import {noneAllPage} from './switchPages.js';
import {applyTheme} from './theme.js';
import {performSearch} from './pages/animeSearch.js';



html.btnClick.forEach(e => {
  e.addEventListener('click', () => {
    const type = e.dataset.type;
    
    if (type == 'theme') {
      applyTheme(html.HTML.dataset.theme);
    }
    else if (type == 'page') {
      document.querySelector('.btn-click.active[data-type="page"]')?.classList.remove('active');
      e.classList.add('active');
      
      const page = e.dataset.page;
      const check = page == 'anime-filter' ? page : null;
      const clear = page == 'main-page' ? true : false;
      noneAllPage({page: page, check: check, clear: clear});
    }
    else if (type == 'search') {
      performSearch();
    }
    else if (type == 'menu') {
      e.classList.toggle('active');
    }
    
  });
});
