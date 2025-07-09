import { getMovieReviewData } from "./data.js";

function init() {
  const movieReviewData = getMovieReviewData();

  paintStatistics(movieReviewData);
}

function paintStatistics(movieReviewData) {
  const flatReviewData = movieReviewData.flat();

  const totalMovies = movieReviewData.length;
  const totalReviews = flatReviewData.length;
  const totalRating = flatReviewData.reduce((acc, item) => {
    return acc + item.rating;
  }, 0);

  const avgRating = (totalRating / totalReviews).toFixed(2);

  const totalMoviesEl = document.querySelector("#tMovies");
  addStat(totalMoviesEl, totalMovies);
}

function addStat(elem, value) {
  const spanEL = document.createElement("span");
  spanEL.innerText = value;
  elem.appendChild(spanEL);
}

init();
