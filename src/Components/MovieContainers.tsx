import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import axios from "../axios";
import { useEffect, useRef, useState } from "react";
import { imageId } from "../Constants/const";
function MovieContainers(prop) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(true);
  const [movies, setMovies] = useState([]);

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
    axios
      .get(prop.url)
      .then((respons) => {
        console.log("movies :", prop.url);
        setMovies(respons.data.results);
      });
  }, []);

  return (
    <div className="space-y-4 space-x-4 w-full h-60 relative bottom-52 ">
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
              <div
                style={{
                  backgroundImage: `url(${
                    movies ? imageId + data.backdrop_path : ""
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-1/6 rounded-sm  relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
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
  );
}

export default MovieContainers;
