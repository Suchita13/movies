import { MovieDetailInfo } from './movie-info.js';

const API_KEY ='93dc8f056bd26a4e357c936b45bd9e37';
const getmovieDetail = (id) =>{
      const api = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`;
      fetch(api)
      .then((movies) => {
            return movies.json();
      }).then((data) => {
            MovieDetailInfo(data);
      });   
}

const url = window.location.href;
console.log(url);
const movie_id = url.split('=')[1];
console.log(movie_id);
getmovieDetail(movie_id);