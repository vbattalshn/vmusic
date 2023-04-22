import Link from "next/link";
import {useRouter} from "next/router";

function MenuIcon(icon){
    switch (icon.icon) {
        case 'home':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18v-3M10.07 2.82L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01z" ></path>
                </svg>
            )
            break;
        case 'search':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2" ></path>
                </svg>
            )
            break;
        case 'liked':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 014.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z"></path>
                </svg>
            )
            break;
        case 'profile':
            return(
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 01-4.27-4.43C7.56 3.99 9.54 2 12 2a4.435 4.435 0 01.16 8.87zM7.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0z" ></path>
                </svg>
            )
            break;
        default:
            return "İcon not found";
            break;
    }
}

const NavLinks = [
    {
        "name": "Anasayfa",
        "path": "/",
        "icon": "home"
    },
    {
        "name": "Ara",
        "path": "/search/",
        "icon": "search"
    },
    {
        "name": "Beğendiklerin",
        "path": "/playlist/liked",
        "icon": "liked"
    },
    {
        "name": "Profile",
        "path": "/profile",
        "icon": "profile"
    }
]

const Playlists = [
    {
        "name": "Workout Motivation",
        "path": "/playlist/workout-motivation"
    },
    {
        "name": "Parti Havası",
        "path": "/playlist/parti-havasi"
    },
    {
        "name": "Moral Booster",
        "path": "/playlist/moral-booster"
    },
    {
        "name": "Gece Yolculuğu",
        "path": "/playlist/gece-yolculugu"
    }
]

function NavLink({name, path, icon}) {
    const router = useRouter();

    return(
        <Link href={path} className={"w-full p-2 rounded-lg flex items-center gap-2 font-medium text-gray-700 hocus:bg-neutral-300/50 hocus:text-indigo-600 hocus:px-4 transition-all " + (router.pathname == path ? "!text-indigo-600 !bg-indigo-600/25 !px-4" : "") }>
            <MenuIcon icon={icon} />
            {name}
        </Link>
    )
}

export default function Sidebar(){
    return(
        <aside className="w-80 sticky top-0 left-0 z-10 p-4 bg-neutral-200 flex flex-col gap-2 overflow-auto">
            <span className="h-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="116" className="h-full" fill="none" viewBox="0 0 116 48" >
                    <path stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.28 34a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24z"></path>
                    <path stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28.84 28.8V16.6c0-2.6-1.63-2.96-3.28-2.51l-6.24 1.7c-1.14.31-1.92 1.21-1.92 2.51v12.57"></path>
                    <path stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M25.72 31.92a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24zM17.4 21.52l11.44-3.12" ></path>
                    <path fill="#4F46E5" d="M43.38 16.454l3.786 11.45h.15l3.778-11.45h2.898L48.864 31H45.61l-5.12-14.546h2.89z" ></path>
                    <path fill="#262626" d="M54.907 16.454h3.225l4.318 10.54h.17l4.319-10.54h3.224V31h-2.528v-9.993H67.5l-4.02 9.95h-1.89l-4.02-9.971h-.134V31h-2.529V16.454zm23.965 9.958V20.09h2.57V31H78.95v-1.939h-.114a3.28 3.28 0 01-1.214 1.499c-.559.388-1.248.582-2.067.582-.715 0-1.347-.159-1.896-.476-.545-.322-.97-.788-1.279-1.399-.307-.616-.461-1.359-.461-2.23V20.09h2.57v6.548c0 .692.19 1.24.569 1.648.379.407.876.61 1.491.61.38 0 .746-.092 1.101-.276.355-.185.646-.46.874-.824.232-.37.348-.831.348-1.385zm12.837-3.438l-2.344.256a1.882 1.882 0 00-.348-.668 1.728 1.728 0 00-.653-.504c-.275-.128-.611-.192-1.009-.192-.535 0-.985.117-1.35.349-.36.232-.537.532-.532.901a.944.944 0 00.348.775c.242.199.64.362 1.193.49l1.861.397c1.032.223 1.8.576 2.301 1.059.507.483.762 1.115.767 1.896a2.967 2.967 0 01-.603 1.818c-.394.521-.94.928-1.641 1.222-.7.293-1.506.44-2.415.44-1.335 0-2.41-.28-3.224-.838-.815-.563-1.3-1.347-1.456-2.35l2.507-.242c.113.492.355.864.724 1.115.37.25.85.376 1.442.376.61 0 1.1-.125 1.47-.376.374-.251.561-.561.561-.93 0-.313-.12-.571-.362-.775-.237-.203-.606-.36-1.108-.469l-1.86-.39c-1.047-.218-1.821-.585-2.323-1.101-.502-.52-.75-1.179-.746-1.974-.005-.673.178-1.255.547-1.748.374-.497.892-.88 1.555-1.15.668-.275 1.437-.412 2.309-.412 1.278 0 2.284.272 3.018.817.739.544 1.196 1.28 1.37 2.208zM93.063 31V20.09h2.571V31h-2.57zm1.293-12.457a1.5 1.5 0 01-1.051-.405 1.305 1.305 0 01-.44-.987c0-.389.146-.718.44-.988a1.485 1.485 0 011.05-.412c.413 0 .763.138 1.052.412.294.27.44.6.44.988 0 .383-.146.712-.44.987-.289.27-.64.405-1.051.405zm7.681 12.67c-1.089 0-2.025-.239-2.806-.717a4.79 4.79 0 01-1.797-1.982c-.416-.847-.625-1.823-.625-2.926 0-1.108.213-2.086.64-2.933.426-.852 1.027-1.515 1.803-1.989.782-.478 1.705-.717 2.77-.717.886 0 1.669.163 2.351.49a4.013 4.013 0 011.641 1.37c.407.588.639 1.274.696 2.06h-2.458a2.347 2.347 0 00-.71-1.314c-.369-.355-.864-.532-1.484-.532-.526 0-.987.142-1.385.426-.398.28-.708.682-.93 1.207-.218.526-.327 1.156-.327 1.89 0 .743.109 1.382.327 1.917.217.53.523.94.916 1.229.397.284.864.426 1.399.426.379 0 .717-.071 1.016-.213.303-.147.556-.358.759-.632.204-.275.344-.609.419-1.002h2.458c-.062.772-.289 1.456-.682 2.053a4.038 4.038 0 01-1.605 1.392c-.677.331-1.473.497-2.386.497z" ></path>
                </svg>
            </span>
            
            <h3 className="font-semibold text-neutral-400">Menu</h3>
            <nav>
                <ul className="flex flex-col gap-1">
                { NavLinks.map((link, index) => {
                    return(
                    <li key={index}>
                        <NavLink name={link.name} path={link.path} icon={link.icon} />
                    </li>
                    )
                })
                }    
                </ul>
            </nav>
            <h3 className="font-semibold text-neutral-400">Playlists</h3>
            <nav>
                <ul className="flex flex-col gap-1">
                    {Playlists.map(((playlist, index) => {
                        return <Link className="font-medium text-neutral-700 hocus:underline" href={playlist.path} key={index} >{playlist.name}</Link>
                    }))}
                </ul>
            </nav>
            <button className="p-4 text-indigo-600 font-semibold flex justify-center items-center gap-1 rounded-lg hocus:bg-indigo-600/25 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" ></path>
                </svg>
                Uygulamayı İndir
            </button>
        </aside>
    )
}