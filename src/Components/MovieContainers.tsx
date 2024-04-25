import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'
function MovieContainers() {
    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved,setIsMoved]= useState(true)

    const handleClick = (direction:string)=>{
        setIsMoved(true)

        if(rowRef.current){
            const {scrollLeft,clientWidth} = rowRef.current

            const scrollTo =
            direction === 'left'
            ?scrollLeft-clientWidth
            :scrollLeft+clientWidth

            rowRef.current.scrollTo({left:scrollTo,behavior:'smooth'})
        }
    }
  return (
    <div className="space-y-0.5 w-full h-60  bg-slate-600">
       
            <h1 className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl'>Popular on Netflix</h1>
       
        <div className=" group relative md:-ml-2">
            <ChevronLeftIcon onClick={()=>handleClick("left")} className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved&&'hidden'}`}/>
            
            <div ref={rowRef} className='flex items-center space-x-0.5 scrollbar-hide overflow-x-scroll md:space-x-2.5 md:p-2'>

            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">fgfdfd</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sadf</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sdfds</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">dfdsfdf</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sdf</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sdd</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sdd</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sdd</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sdd</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sdd</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sdd</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sdd</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sdd</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sdd</div>
            <div className="w-1/6  bg-red-400 relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">sdd</div>
        
           </div>

            <ChevronRightIcon onClick={()=>handleClick("right")} className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && 'hidden'}`}/>
        </div>
    </div>


    // <div className='h-40 space-y-0.5 md:space-y-2'>
    //     <h2 className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl'>Fello world</h2>
    //     <div className='group relative md:-ml-2' >
    //         <ChevronLeftIcon className='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'/>

    //         <div className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2'>
    //             <Thumbnail/>
    //         </div>

    //         <ChevronRightIcon className='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'/>
    //     </div>
    // </div>
  )
}

export default MovieContainers