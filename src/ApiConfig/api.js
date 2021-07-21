const url = process.env.REACT_APP_IMDB_APP_URL;
const apikey = process.env.REACT_APP_IMDB_API_KEY;
const lang = 'en';

//API urls:- https://imdb-api.com
export const getComingSoon = () => url+`/`+lang+ `/API/ComingSoon/`;
//Search
export const getSearch = (searchstring) => url+`/`+lang+ `/API/Search/`+apikey+`/`+`${searchstring}`;
export const getSearchTitle = (searchstring) => url+`/`+lang+ `/API/SearchTitle/`+apikey+`/`+`${searchstring}`;
export const getSearchMovie = (searchstring) => url+`/`+lang+ `/API/SearchMovie/`+apikey+`/`+`${searchstring}`;
export const getSearchSeries = (searchstring) => url+`/`+lang+ `/API/SearchSeries/`+apikey+`/`+`${searchstring}`;
export const getSearchName = (searchstring) => url+`/`+lang+ `/API/SearchName/`+apikey+`/`+`${searchstring}`;
export const getSearchEpisode = (searchstring) => url+`/`+lang+ `/API/SearchEpisode/`+apikey+`/`+`${searchstring}`;
export const getSearchCompany = (searchstring) => url+`/`+lang+ `/API/SearchCompany/`+apikey+`/`+`${searchstring}`;
export const getSearchKeyword = (searchstring) => url+`/`+lang+ `/API/SearchKeyword/`+apikey+`/`+`${searchstring}`;
export const getSearchAll = (searchstring) => url+`/`+lang+ `/API/SearchAll/`+apikey+`/`+`${searchstring}`;

//Title
// export const getSearchMovie = (searchstring) => url+`/`+lang+ `/API/Title/`+apikey+`/`+`${searchstring}`;
// export const getSearchMovie = (searchstring) => url+`/`+lang+ `/API/SearchCompany/`+apikey+`/`+`${searchstring}`;
// export const getSearchMovie = (searchstring) => url+`/`+lang+ `/API/SearchCompany/`+apikey+`/`+`${searchstring}`;










