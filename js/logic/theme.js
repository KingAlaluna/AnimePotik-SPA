import {html} from '../data/config.js';


export function applyTheme(theme) {
  if (theme == 'dark') {
    html.HTML.dataset.theme = 'light';
  } else {
    html.HTML.dataset.theme = 'dark';
  }
}


//systems theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme('light');
} else {
  applyTheme('dark');
}
