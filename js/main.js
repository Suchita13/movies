import { prepareCard } from './movie-cards.js';

const API_KEY = '93dc8f056bd26a4e357c936b45bd9e37';

const latestMovieApi = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&include_adult=false`;
const trendingMovieApi =`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
const popularMovieApi =`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const fetchMovieData = (url,idx) => {
	fetch(url)
	.then((res)=>res.json())
	.then((result)=>{
	    prepareCard(result,idx);
	})
	.catch(()=>{
		console.log('cannot fetch data.');
	})
}

fetchMovieData(latestMovieApi,0);
fetchMovieData(trendingMovieApi,1);
fetchMovieData(popularMovieApi,2);