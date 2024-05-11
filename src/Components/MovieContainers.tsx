import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import axios from "../axios";
import { useEffect, useRef, useState } from "react";
import { imageId,API_KEY } from "../Constants/const";
import YouTube from 'react-youtube'
function MovieContainers(prop) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieUrl,setMovieUrl] = useState("")

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  useEffect(() => {
    axios.get(prop.url).then((respons) => {
      console.log("movies :", prop.url);
      setMovies(respons.data.results);
    });
  }, []);

  const opts = {
    height: '490',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovieClick = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{
      if(response.data.results.length!==0){
        setMovieUrl(response.data.results[0])
      }else{
        " Array is empty !! ,There is no ralated videos"
      }
    })
  }

  return (
    <div className="w-full h-auto relative bottom-36">
      <div className="space-y-4 space-x-4 w-full h-60 bg-opacity-35 backdrop-filter backdrop-blur-[2px] ">
        <h1 className=" mx-4 w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
          {prop.title}
        </h1>

        <div className=" group relative md:-ml-2">
          <ChevronLeftIcon
            onClick={() => handleClick("left")}
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && "hidden"
            }`}
          />

          <div
            ref={rowRef}
            className="flex items-center space-x-0.5 scrollbar-hide overflow-x-scroll md:space-x-2.5 md:p-2"
          >
            {movies.map((data) => {
              return (
                <div onClick={()=>handleMovieClick(data.id)}
                  style={{
                    backgroundImage: `url(${
                      movies ? imageId + data.backdrop_path : ""
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="w-1/6 rounded-sm  relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 "
                ></div>
              );
            })}
          </div>

          <ChevronRightIcon
            onClick={() => handleClick("right")}
            className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && "hidden"
            }`}
          />
        </div>
      </div>
      {/* <div className="w-96 h-96 bg-slate-100 "></div> */}
     { movieUrl && <YouTube videoId={movieUrl.key} opts={opts} />}
    </div>
  );
}

export default MovieContainers;
