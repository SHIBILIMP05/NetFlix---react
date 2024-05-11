import MovieContainers from "./MovieContainers";
import MovieDiscription from "./MovieDiscription";
import axios from "../axios";
import { API_KEY,imageId } from "../Constants/const";
import { useEffect, useState } from "react";
import {popular,latest,actions,ComedyMovies,Crime,HorrorMovies,Mystery,War} from "../urls"
function MainSection() {
  const obj = {
    title: "",
    overview: "",
    backdrop_path: "",
  };
  const [movie, setMovie] = useState(obj);
  useEffect(() => {
     const randomNum:number = Math.floor(Math.random() * 20) + 0
    console.log(randomNum);
    
    axios
      .get(`movie/popular?language=en-US&page=1&api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data.results[randomNum]);
      })
      .catch((err) => {
        console.log(err);
      });
  },  []);
  console.log(movie.backdrop_path )
  return (
    <div className=" w-full h-auto">
      {/* video section */}
      <div
        style={{
          backgroundImage: `url(${movie?imageId+movie.backdrop_path:''})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" w-full h-[90vh] bg-gradient-to-b "
      >
        <div className=" text-white w-full h-24  flex items-center">
          <div className=" px-24 w-auto h-auto flex ">
            <div className="">
              <img src="./pngwing.com.png" alt="" />
            </div>
            <div className="font-bold flex items-center gap-x-8 font-netFlix list-none mx-12">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">TV Shows</li>
              <li className="cursor-pointer">Movies</li>
              <li className="cursor-pointer">New & Popular</li>
              <li className="cursor-pointer">My List</li>
              <li className="cursor-pointer">Browse by Languages</li>
            </div>
          </div>
          <div className="gap-5 relative left-[30%] flex items-center ">
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </span>
            <div className="w-10 h-10 cursor-pointer">
              <img
                className="rounded"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
              />
            </div>
          </div>
        </div>
        <MovieDiscription title={movie.title} discription={movie.overview} />
      </div>
      <MovieContainers title={"Popular"} url={popular} />
      <MovieContainers title={"Latest"} url={latest} />
      <MovieContainers title={"Actions"} url={actions} />
      <MovieContainers title={"ComedyMovies"} url={ComedyMovies} />
      <MovieContainers title={"HorrorMovies"} url={HorrorMovies} />
      <MovieContainers title={"Crime"} url={Crime} />
      <MovieContainers title={"Mystery"} url={Mystery} />
      <MovieContainers title={"War"} url={War} />
      
    </div>
  );
}

export default MainSection;
