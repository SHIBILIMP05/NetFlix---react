import MovieContainers from "./MovieContainers";
import MovieDiscription from "./MovieDiscription";

function MainSection() {
  return (
    <div className="bg-black w-screen h-auto">
      {/* Video section */}
      <div className="bg-slate-400 w-full h-[750px] bg-gradient-to-b">
        <div className=" text-white w-full h-24  flex items-center">
          <div className=" px-32 w-auto h-auto flex ">
            <div className="">
              <img src="../public/pngwing.com.png" alt="" />
            </div>
            <div className="font-bold flex items-center gap-x-8 font-netFlix list-none mx-12">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </div>
          </div>
          <div className="gap-5 relative left-[27%] flex items-center ">
            <span>
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
            <span>
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
            <div className="w-10 h-10 ">
              <img
                className="rounded"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
              />
            </div>
          </div>
        </div>
        <MovieDiscription/>
      </div>
      <MovieContainers />
      <MovieContainers />
    </div>
  );
}

export default MainSection;
