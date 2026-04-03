//html elements
const i = (id) => document.getElementById(id);
export const c = (classis) => document.querySelectorAll(`.${classis}`);


export const html = {
  //general
  HTML: document.documentElement,
  allPage: c('page'),
  inputSearch: i('input-search'),
  video: i('video'),
  
  
  //wraps
  wrapAnimeViewInfo: i('wrap-anime-view-info'),
  
  containerTop10Anime: i('container-top-10-anime'),
  containerRecommendAmine: i('container-recommend-amine'),
  
  wrapFilterAnime: c('wrap-filter-anime'),
  btnFilterAnime: c('btn-filter-anime'),
  
  
  //btns
  btnClick: c('btn-click'),
  btnScrollPage: c('btn-scroll-page'),
  
  pgBtnLeft: i('pg-btn-left'),
  pgBtnRight: i('pg-btn-right'),
  
  
  //texts
  textTopAnime: i('text-top-anime'),
  textRecomendAnime: i('text-recommend-anime'),
  synopsisAnime: i('synopsis-anime'),
  paginationText: i('pagination-text'),
};


//general data
export const data = {
  //anime
  anime: {
    types: null,
    years: null,
    genres: null,
    studios: null
  },
  
  
  animeSort: false,
  animeSearch: false,
  querys: null,
  
  serverTopAnime: null,
  serverAnime: null,
  
  
  //pagination
  paginationPage: 1,
  allPaginationPage: 5,
  paginationAllAnime: 25,
};
