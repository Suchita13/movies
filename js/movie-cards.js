import { genresNames } from './genres-name.js';
import { quickView } from './quick-view.js';

const API_KEY ='93dc8f056bd26a4e357c936b45bd9e37';

const genresNamesApi = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

const getmovieDetail = (id) =>{
	const api = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`;
	fetch(api)
	.then((movies) => {
		return movies.json();
	}).then((data) => {
		quickView(data);
	});	
}

export const prepareCard = (movies,idx) => {
	let i=0;
	movies.results.slice(0,4).map((card) => {
		//console.log(card);
		let k=1;
		const average = Math.floor(card.vote_average/2);
	  	const node = document.getElementsByTagName('template')[0];
	  	const container = document.querySelectorAll(".movie-section")[idx];
	  	const section = document.importNode(node.content, true);
	  	let title = section.querySelectorAll(".left-span")[0];
	  		title.textContent = card.title;
	  	let img_src = section.querySelectorAll(".movie-img")[0];
	  		img_src.setAttribute('src','https://image.tmdb.org/t/p/w500/' + card.poster_path);
	  	let genres = section.querySelectorAll('.genres')[0];
	  	let genre_name = genresNames(card.genre_ids, genresNamesApi);
	  		genres.textContent = genre_name;
	  	let hearts = section.querySelectorAll(".hearts")[0];
	  	if(i%2==0){
	  		hearts.innerHTML+= `<i class='fa fa-heart fa-lg'></i>`;
	  	}else{
	  		hearts.innerHTML+= `<i class='fa fa-heart-o fa-lg'></i>`;
	  	}
	  	let ratings = section.querySelectorAll(".ratings")[0];
	  	while(k<=5) {
			if(k<=average){
				ratings.innerHTML+= `<i class='fa fa-star star'></i>`;
			}else{
				ratings.innerHTML+= `<i class='fa fa-star-o star'></i>`;
			}
			k++;
	  	}
	  	const link = section.querySelectorAll(".show-more")[0];
	  		link.setAttribute('id',`show_${card.id}`);
	  		link.addEventListener('click',() => {window.open(`show-details.html?movie=${card.id}`,'_self');},false);
	  		img_src.setAttribute('id',card.id);
	  		img_src.addEventListener('click',() => {getmovieDetail(card.id) },false);

  	 	container.appendChild(section);
    	i++;
  	});
}	




