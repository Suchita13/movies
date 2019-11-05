export const MovieDetailInfo = (movies) => {
	console.log(movies);
	let k=1;
	const average = Math.floor(movies.vote_average/2);
	const node = document.getElementsByTagName('template')[0];
	const container = document.querySelectorAll(".movie-detail")[0];
	const section = document.importNode(node.content, true);
	const img_src = section.querySelectorAll(".movie-banner")[0];
		img_src.setAttribute('src','https://image.tmdb.org/t/p/w500/' + movies.backdrop_path);
	const header =section.querySelectorAll('.movie-header__banner')[0];
    	header.textContent = movies.title;
    const overview = section.querySelectorAll(".description")[0];
	  	overview.textContent = movies.overview; 
	const genre_array=[];  	
	for(let j=0;j<movies.genres.length;j++){
			genre_array.push(movies.genres[j].name);
	} 	 		
	const genres = section.querySelectorAll(".genre")[0];
	genres.textContent = movies.genres.map((genre) => genre.name); 

	const cast = section.querySelectorAll(".cast")[0];
	cast.textContent =movies.credits.cast.slice(0,10).map(cast => cast.name);


	let director_name;
	const director = section.querySelectorAll(".director")[0];
			movies.credits.crew.map(function(crew){
			if(crew.job == 'Director'){
				director_name = crew.name;
			}
	});
	director.textContent =director_name;

	const ratings = section.querySelectorAll(".ratings")[0];
	while(k<=5) {
			if(k<=average){
				ratings.innerHTML+= `<i class='fa fa-star star'></i>`;
			}else{
				ratings.innerHTML+= `<i class='fa fa-star-o star'></i>`;
			}
			k++;
	}
	container.appendChild(section);
}
