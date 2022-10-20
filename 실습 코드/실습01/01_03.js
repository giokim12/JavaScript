const movieInfo = {
}

for (let i = 0; i < movieInfo.results.length; i++) {
  if (movieInfo.results[i].vote_average >= 8) {
    console.log(movieInfo.results[i].title)
  }
}

// Array Helper Method 로 변환
movieInfo.results.forEach((movie) => {
  if (movie.vote_average >= 8) {
    console.log(movie.title)
  }
});