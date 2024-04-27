import {API_KEY} from './Constants/const'
export const popular : string =`movie/popular?language=en-US&page=1&api_key=${API_KEY}`
export const latest : string = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const actions : string = `discover/tv?api_key=${API_KEY}&with_networks=28`
export const ComedyMovies  : string = `discover/movie?api_key=${API_KEY}&with_genres=35`
export const HorrorMovies : string = `discover/movie?api_key=${API_KEY}&with_genres=27`
export const Crime : string = `discover/movie?api_key=${API_KEY}&with_genres=80`
export const Mystery : string = `discover/movie?api_key=${API_KEY}&with_genres=9648`
export const War : string = `discover/movie?api_key=${API_KEY}&with_genres=10752`