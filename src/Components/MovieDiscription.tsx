function MovieDiscription() {
  return (
    <div className="font-netFlix w-[50%] h-[50%] break-words p-7   relative left-12 top-48">
      <div className="text-6xl h-auto  my-5 w-auto text-white ">
        <h1>Hello world</h1>
      </div>
      <div className="h-auto my-5 w-full text-white text-xl ">
        <p>
          hdkfjd sdlkjfdk lkdjfkd lkdjfdkf ldkjfdk dkljdklj ldkjldksf sdlkjfdksf
          ldksjksdj lsdkjdkf dfdsdsff dsfdsf sdfdsssssssss sdfffffff
          sdfffffffffff sdfffffff
        </p>
      </div>
      <div className=" my-5 w-auto flex items-center h-auto gap-3  ">
        <div className="bg-white text-black text-2xl w-40 h-16 rounded">
          <button
            type="button"
            className="flex items-center justify-center w-full h-full gap-x-4 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>

            <span>Play</span>
          </button>
        </div>
        <div className="bg-gray-300 bg-opacity-35 backdrop-filter backdrop-blur-xl  text-white text-2xl w-56 h-16 rounded">
          <button
            type="button"
            className="flex items-center justify-center w-full h-full gap-x-4 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>

            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDiscription;
