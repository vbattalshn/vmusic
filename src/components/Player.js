import CustomRange from './CustomRange';
import { useAudio } from 'react-use';
import { secondsToTime } from "@/utils";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Player() {

    const [isLoading, setIsLoading] = useState(true);
    const music = {
        "name": "Odamda Hayalin Saklı",
        "artists": [
            {
                "name": "Mavi Gri",
                "path": "/artist/mavi-gri"
            }
        ],
        "src": "/assets/1_320kbps.mp3",
        "thumbnail": "https://i.scdn.co/image/ab67616d0000b273742cdca02ed0b417879c2698"
    }

    const [audio, state, controls, ref] = useAudio({
        src: music.src,
        autoPlay: false,
        onLoadedMetadata: () => setIsLoading(false),
    });
    
    
    useEffect(() => {
      setIsLoading(true);
    }, [music.src]);

    return(
        <div className="w-full h-[75px] fixed bottom-0 bg-neutral-200 flex flex-col z-90">
            <div className='w-full'>
                {audio}
                <CustomRange value={state?.time} onChange={value => controls.seek(value)} max={state?.duration || 1} min={0} step={0.1} />
            </div>
            <div className="flex justify-between items-center w-full">
                <div className='flex gap-2 items-center w-[30%]'>
                    <img className='w-[70px] h-[70px] object-cover' src={music.thumbnail} />
                    <div className='flex flex-col'>
                        <span className="font-semibold text-neutral-700">{music.name}</span>
                        <span className='flex gap-1 text-neutral-500 text-sm font-regular'>
                            {music.artists.map((artist, index) => {
                                return <Link key={index} href={artist.path}>{artist.name}</Link>
                            })}
                        </span>
                    </div>
                    <span className='text-neutral-700 font-semibold'>
                        {secondsToTime(state?.time || 0)} / {secondsToTime(state?.duration || 0)}
                    </span>
                </div>
                <div className="flex justify-center items-center w-[40%] text-neutral-700 gap-4">
                    <button>
                        <PlayerIcons icon="shuffle" className="w-6 h-6" />
                    </button>
                    <button>
                        <PlayerIcons icon="back" className="w-8 h-8" />
                    </button>
                    {
                        !isLoading ? 
                        <button onClick={() => {state?.paused? controls.play() : controls.pause()}} className='w-[50px] h-[50px] bg-neutral-300 rounded-full flex justify-center items-center'>
                        {
                            state?.paused?
                            <PlayerIcons icon="play" className="w-10 h-10" />
                            :
                            <PlayerIcons icon="pause" className="w-10 h-10" />
                        }
                        </button>
                        :
                        <button  className='w-[50px] h-[50px] bg-neutral-300 rounded-full flex justify-center items-center'>
                            <svg className="animate-spin h-8 w-8 text-neutral-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </button>
                    }
                    
                    <button>
                        <PlayerIcons icon="next" className="w-8 h-8" />
                    </button>
                    <button>
                        <PlayerIcons icon="repeat" className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex items-center w-[30%] overflow-hidden gap-2 justify-end px-2">
                    <button className="w-8 h-8 rounded-lg bg-neutral-300/50 flex justify-center items-center text-neutral-700">
                        <PlayerIcons icon="like" className="w-6 h-6" />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-neutral-300/50 flex justify-center items-center text-red-600">
                        <PlayerIcons icon="liked" className="w-6 h-6" />
                    </button>
                    <div className="p-1 px-2 rounded-lg bg-neutral-300/50 flex justify-center items-center gap-2">
                        <button onClick={() => state?.muted ? controls.unmute() : controls.mute()} className="text-neutral-700">
                            {
                                state?.volume > 0.5 && !state?.muted ? 
                                <PlayerIcons icon="volume-hight" className="w-6 h-6" />
                                :
                                (state?.volume == 0 || state?.muted?
                                <PlayerIcons icon="muted" className="w-6 h-6" />
                                :
                                <PlayerIcons icon="volume-low" className="w-6 h-6" />)
                            }
                        </button>
                        <div className='w-[75px]'>
                            <CustomRange value={state?.muted ? 0 : state?.volume} onChange={value => {controls.unmute(); controls.volume(value)}} rounded={true} min={0} max={1} />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


function PlayerIcons(props){
    switch (props.icon) {
        case "pause":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" {...props} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.5 3.5A1.5 1.5 0 017 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0112 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5z"></path>
                </svg>
            );
        case "play":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" {...props} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path>
                </svg>
            );
        case "back":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" {...props} width="32" height="32" fill="none" viewBox="0 0 32 32" >
                  <path fill="currentColor" d="M26.988 9.626v12.76c0 2.614-2.84 4.254-5.107 2.947l-5.533-3.187-5.533-3.2c-2.267-1.306-2.267-4.573 0-5.88l5.533-3.2L21.88 6.68c2.267-1.306 5.107.32 5.107 2.947zM5.016 25.24c-.547 0-1-.453-1-1V7.76c0-.546.453-1 1-1 .546 0 1 .454 1 1v16.48c0 .547-.454 1-1 1z"></path>
                </svg>
              );
        case "next":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" {...props} width="32" height="32" fill="none" viewBox="0 0 32 32" >
                    <path fill="currentColor" d="M5.016 9.626v12.76c0 2.614 2.84 4.254 5.106 2.947l5.534-3.187 5.533-3.2c2.267-1.306 2.267-4.573 0-5.88l-5.533-3.2-5.534-3.187C7.856 5.373 5.016 7 5.016 9.626zM26.984 25.24c-.546 0-1-.453-1-1V7.76c0-.546.454-1 1-1 .547 0 1 .454 1 1v16.48c0 .547-.44 1-1 1z" ></path>
                </svg>
              );
        case "shuffle":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" {...props} width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path fill="currentColor" fillRule="evenodd" d="M0 5.25a.75.75 0 01.75-.75h.75c3.303 0 5.74 1.86 7.311 3.627a15.994 15.994 0 011.689 2.298c.39-.645.954-1.47 1.689-2.298C13.759 6.36 16.197 4.5 19.5 4.5V6c-2.697 0-4.76 1.515-6.189 3.123A14.435 14.435 0 0011.334 12a14.435 14.435 0 001.976 2.877C14.742 16.485 16.805 18 19.5 18v1.5c-3.303 0-5.74-1.86-7.311-3.627a15.892 15.892 0 01-1.689-2.298 15.88 15.88 0 01-1.689 2.298C7.241 17.64 4.803 19.5 1.5 19.5H.75a.75.75 0 110-1.5h.75c2.697 0 4.76-1.515 6.189-3.123A14.437 14.437 0 009.666 12 14.435 14.435 0 007.69 9.123C6.258 7.515 4.194 6 1.5 6H.75A.75.75 0 010 5.25z" clipRule="evenodd"></path>
                    <path fill="currentColor" d="M19.5 8.199V2.301a.375.375 0 01.615-.288l3.54 2.949c.18.15.18.426 0 .576l-3.54 2.949a.375.375 0 01-.615-.288zm0 13.5v-5.898a.375.375 0 01.615-.288l3.54 2.949c.18.15.18.426 0 .576l-3.54 2.949a.375.375 0 01-.615-.288z" ></path>
                </svg>
            );
        case "repeat":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" {...props} width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path fill="currentColor" d="M16.5 8.199V6h-9a6 6 0 00-5.376 8.665.75.75 0 01-1.344.67A7.5 7.5 0 017.5 4.5h9V2.301a.375.375 0 01.615-.288l3.54 2.949c.18.15.18.426 0 .576l-3.54 2.949a.375.375 0 01-.615-.288zm5.715.129a.75.75 0 011.005.338A7.499 7.499 0 0116.5 19.5h-9v2.199a.375.375 0 01-.615.288l-3.54-2.949a.375.375 0 010-.576l3.54-2.949a.375.375 0 01.615.288V18h9a6 6 0 005.378-8.665.75.75 0 01.337-1.007z" ></path>
                </svg>
            );
        case "like":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" {...props} width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 014.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z"></path>
                </svg>
            );
        case "liked":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" {...props} width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path fill="currentColor" d="M16.44 3.102c-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 00-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59z" ></path>
                </svg>
            );
        case "volume-hight":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" {...props} width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeWidth="1.5" d="M2 10v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3z" ></path>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 8a6.66 6.66 0 010 8M19.83 5.5a10.83 10.83 0 010 13"></path>
                </svg>
            );
        case "volume-low":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" {...props} width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeWidth="1.5" d="M3.33 10v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L8.82 6.7c-.32.19-.69.3-1.06.3H6.33c-2 0-3 1-3 3z" ></path>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.33 8a6.66 6.66 0 010 8" ></path>
                </svg>
            );
        case "muted":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" {...props} width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeWidth="1.5" d="M2 10.16v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.57c0-2.98-2.07-4.12-4.59-2.54L7.49 6.86c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3z" ></path>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M22 14.12l-3.96-3.96M21.96 10.2L18 14.16" ></path>
                </svg>
            );
        default:
            return "İcon not found";
    }
}