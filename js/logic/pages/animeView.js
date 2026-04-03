import {html} from '../../data/config.js';
import {noneAllPage} from '../switchPages.js';


//відобразити інформацію про аніме
export function infoAnime(anime) {
  noneAllPage({page: 'anime-view'});
  
  //general datas
  const img = anime?.images?.webp?.large_image_url ? anime.images.webp.large_image_url : '';
  const name = anime?.title ? anime.title : 'невідомо...';
  const score = anime?.score ? anime.score + '★' : 'невідомо';
  const scoredBy = anime?.scored_by ? anime.scored_by : 'невідомо';
  const rank = anime?.rank ? anime.rank : 'невідомо';
  const popularity = anime?.popularity ? anime.popularity : 'невідомо';
  const members = anime?.members ? anime.members : 'невідомо';
  const favorites = anime?.favorites ? anime.favorites : 'невідомо';
  const demographics = anime?.demographics?.[0]?.name ? anime.demographics[0].name : 'невідомо';
  const rating = anime?.rating ? anime.rating : 'невідомо';
  const year = anime?.year ? anime.year : 'невідомо';
  const season = anime?.season ? anime.season : 'невідомо';
  const aired = anime?.aired?.string ? anime.aired.string : 'невідомо';
  const episodes = anime?.episodes ? anime.episodes : 'невідомо';
  const duration = anime?.duration ? anime.duration : 'невідомо';
  const status = anime?.status ? anime.status : 'невідомо';
  const airing = anime?.airing ? 'Так' : 'Ні';
  const studios = anime?.studios?.length > 0 ? anime.studios.map(e => e.name).join(', ') : 'невідомо';
  const type = anime?.type ? anime.type : 'невідомо';
  const source = anime?.source ? anime.source : 'невідомо';
  const genres = anime?.genres?.length > 0 ? anime.genres.map(e => e.name).join(', ') : 'невідомо';
  const themes = anime?.themes?.length > 0 ? anime.themes.map(e => e.name).join(', ') : 'невідомо';
  
  const synopsis = anime?.synopsis ? anime.synopsis : 'Опис відсутній...';
  const trailer = anime.trailer.embed_url;
  
  
  html.synopsisAnime.textContent = synopsis;
  html.video.src = trailer;
  
  
  //add info
  html.wrapAnimeViewInfo.innerHTML = `
    <img class="view-anime-poster" src="${img}">
    
    <section class="info-wrap">
      <h2>${name}</h2>
      <span>Оцінка: ${score}</span>
      <span>Кількість оцінок: ${scoredBy}</span>
      <span>Місце в рейтингу: ${rank}</span>
      <span>Місце по популярності: ${popularity}</span>
      <span>Кількість користувачів: ${members}</span>
      <span>Додали в вибранне: ${favorites}</span>
      <span>Цільова аудиторія: ${demographics}</span>
      <span>Вікове обмеження: ${rating}</span>
      <span>Рік випуску: ${year}</span>
      <span>Місяць випуску: ${season}</span>
      <span>Повна дата випуску: ${aired}</span>
      <span>Кількість серій: ${episodes}</span>
      <span>Тривалість серії: ${duration}</span>
      <span>Статус: ${status}</span>
      <span>Чи виходить тепер: ${airing}</span>
      <span>Студія: ${studios}</span>
      <span>Тип: ${type}</span>
      <span>Первинне джерело: ${source}</span>
      <span>Жанри: ${genres}</span>
      <span>Теми: ${themes}</span>
      
      <br>
    </section>
  `;
}

window.onpopstate = function (e) {
  noneAllPage({page: 'main-page'});
}
