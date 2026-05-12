import {html} from '../data/config.js';


export function applyTheme(theme) {
  if (theme == 'dark') {
    localStorage.setItem('AnimePotik-SPA-darkTheme', 'false');
    html.HTML.dataset.theme = 'light';
  } else {
    localStorage.setItem('AnimePotik-SPA-darkTheme', 'true');
    html.HTML.dataset.theme = 'dark';
  }
}


//initial theme
if (localStorage.getItem('AnimePotik-SPA-darkTheme')) {
  //user theme
  if (localStorage.getItem('AnimePotik-SPA-darkTheme') == 'false') {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
} else {
  //sustems theme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }
}
