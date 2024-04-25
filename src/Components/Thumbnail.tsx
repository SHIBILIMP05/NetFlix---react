

function Thumbnail() {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
        <img src={`../public/iceland-3908498_1280.jpg`} className="rounded-sm object-cover" />
        <img src={`../public/iceland-3908498_1280.jpg`} className="rounded-sm object-cover" />
        <img src={`../public/iceland-3908498_1280.jpg`} className="rounded-sm object-cover" />
        <img src={`../public/iceland-3908498_1280.jpg`} className="rounded-sm object-cover" />
        <img src={`../public/iceland-3908498_1280.jpg`} className="rounded-sm object-cover" />
    </div>
  )
}

export default Thumbnail