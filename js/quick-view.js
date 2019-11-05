
export const quickView = (data) => {
	//console.log(data);
	let k=1;
	const average = Math.floor(data.vote_average/2);
	const node = document.getElementsByTagName('template')[1];
	const section = document.importNode(node.content, true);
	//console.log(section);
	const modal = section.querySelectorAll('.modal-wrapper')[0];
	const modalBody = modal.querySelector('.modal-body');
    const closeBtn = modal.querySelector('.close');
    const closeButton = modal.querySelector('.close-button');
    const header =section.querySelectorAll('.modal-header__banner')[0];
    	header.textContent = data.title;
    const img_src = section.querySelectorAll(".movie-image")[0];
	  	img_src.setAttribute('src','https://image.tmdb.org/t/p/w500' + data.backdrop_path);
	const overview = section.querySelectorAll(".overview")[0];
	  	overview.textContent = data.overview; 
	const genres = section.querySelectorAll(".genre")[0];
	genres.textContent = data.genres.map((genre) => genre.name); 
	const ratings = section.querySelectorAll(".ratings")[0];
	while(k<=5) {
			if(k<=average){
				ratings.innerHTML+= `<i class='fa fa-star star'></i>`;
			}else{
				ratings.innerHTML+= `<i class='fa fa-star-o star'></i>`;
			}
			k++;
	}
	const cast = section.querySelectorAll(".cast")[0];
			cast.textContent =data.credits.cast.slice(0,10).map(cast => cast.name);

	let director_name;
	const director = section.querySelectorAll(".director")[0];
			data.credits.crew.map(function(crew){
			if(crew.job == 'Director'){
				director_name = crew.name;
			}
	});
	director.textContent =director_name;


    closeBtn.addEventListener('click', () => modal.classList.remove('is-open'));
    closeButton.addEventListener('click', () => modal.classList.remove('is-open'));
    modal.addEventListener('click', () => modal.classList.remove('is-open'));
      
    modalBody.addEventListener('click', (e) => e.stopPropagation());

    modal.classList.toggle('is-open');

    document.body.addEventListener('keydown', (e) => {
        if(e.keyCode === 27) {
          modal.classList.remove('is-open')
        }
      });

    document.body.appendChild(section);
      
}
