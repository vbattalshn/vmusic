import CustomRange from './CustomRange';
import PlayerIcons from './PlayerIcons';
import { useAudio, useMediaDevices } from 'react-use';
import { secondsToTime } from "@/utils";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { playBackMusic, playNextMusic, switchShuffle, switchRepeat } from '@/store/musicPlayer';

export default function Player() {
    const music = useSelector((state) => state.musicPlayer.currentMusic)
    const nextMusic = useSelector((state) => state.musicPlayer.nextMusic)
    const backMusic = useSelector((state) => state.musicPlayer.backMusic)
    const playerOptions = useSelector((state) => state.musicPlayer.playerOptions)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);
    const [continued, setContinued] = useState(false);

    const [audio, state, controls, ref] = useAudio({
        src: music?.src,
        autoPlay: true
    });

    const handleLoadedMetadata = () => {
        setIsLoading(false);
        
        if (!state?.paused || continued == true) {
            controls.play();
            setContinued(false);
        }
    }

    const handleEnded = () => {
        console.log("ended");
        if(playerOptions?.repeat){
            controls.play();
        }else{
            setContinued(true);
            dispatch(playNextMusic());
        }
    }

    useEffect(() => {
        setIsLoading(true);

        ref.current.addEventListener("loadedmetadata", handleLoadedMetadata);
        ref.current.addEventListener("ended", handleEnded);

        return () => {
            if (ref.current) {
                ref.current.removeEventListener("endmed", handleEnded);
                ref.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
            }
        };
        
      }, [music?.src]);
    
    
    useEffect(() => {
        const spanElement = document.querySelector('.musicInfo');
        spanElement.classList.add('scroll-text');
        spanElement.addEventListener("mouseenter", ()=>spanElement.classList.add('scroll-text'));
        spanElement.addEventListener("mouseleave", ()=>spanElement.classList.remove('scroll-text'));
    }, [])

    return(
        <div className="w-full h-[75px] fixed bottom-0 bg-neutral-200 flex flex-col z-90">
            <div className='w-full'>
                {audio}
                <CustomRange value={state?.time || 0} onChange={value => controls.seek(value)} max={state?.duration || 1} min={0} step={0.1} />
            </div>
            <div className="flex justify-between items-center w-full">
                <div className='flex gap-2 items-center w-[30%]'>
                    <MusicInfo thumbnail={music?.thumbnail} name={music?.name} artists={music?.artists} time={state?.time} duration={state?.duration} />
                </div>
                <div className="flex justify-center items-center w-[40%] text-neutral-700 gap-4">
                    <button className={playerOptions.shuffle?'text-indigo-600':null} onClick={() => dispatch(switchShuffle())}>
                        <PlayerIcons icon="shuffle" className="w-6 h-6" />
                    </button>
                    <button className={backMusic.length==0?"opacity-50":null} disabled={backMusic.length==0} onClick={() => dispatch(playBackMusic())}>
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
                    
                    <button className={nextMusic.length==0?"opacity-50":null} disabled={nextMusic.length==0} onClick={() => dispatch(playNextMusic())}>
                        <PlayerIcons icon="next" className="w-8 h-8" />
                    </button>
                    <button className={playerOptions.repeat?'text-indigo-600':null} onClick={() => dispatch(switchRepeat())}>
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

function MusicInfo({ thumbnail, name, artists, time, duration }){
    return(
        <>
        <img className='w-[70px] h-[70px] object-cover' src={thumbnail || "#"} />
        <div className='flex flex-col w-[200px] overflow-hidden musicInfo'>
            <span className="font-semibold text-neutral-700 musicName">{name || "Undefined name"}</span>
            <span className='flex gap-1 text-neutral-500 text-sm font-regular'>
                {artists.map((artist, index) => {
                    return <Link key={index} href={artist.path}>{artist.name}</Link>
                })}
            </span>
        </div>
        <span className='text-neutral-700 font-semibold'>
            {secondsToTime(time || 0)} / {secondsToTime(duration || 0)}
        </span>
        </>
    )
}
