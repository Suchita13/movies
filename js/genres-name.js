
export const genresNames = (genres_id, url) => {
	var genre_array = [];
	fetch(url)
	.then((res) => res.json())
	.then((data) => {
		data.genres.map( (genre) => {
			//console.log(genre);
			for(let i=0;i<genres_id.length;i++){
				if(genres_id[i] == genre.id){
					//console.log(genre.name);
					genre_array.push(genre.name);
				}
			}

		});
	//	console.log(genre_array);

	})
	.catch(() => {
		console.log('error');
	})
	return genre_array;
}