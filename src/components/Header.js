import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full sticky top-0 p-2 flex gap-4 justify-between items-center">
      <div className="flex gap-2">
        <button className="bg-neutral-300 text-neutral-700 flex justify-center items-center rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08" ></path>
          </svg>
        </button>
        <button className="bg-neutral-300 text-neutral-700 flex justify-center items-center rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
            <path stroke="#404040" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08" ></path>
          </svg>
        </button>
      </div>
      <label htmlFor="search" className="flex-1 w-full bg-neutral-300 rounded-full border border-neutral-400 flex itemx-center gap-2 p-1 px-2 text-neutral-600 font-medium focus-within:border-indigo-600 focus-within:ring focus-within:ring-indigo-600/50 transition-all">
        <SearchIcon />
        <input type="text" autoComplete="off" id="search" className="bg-transparent w-full focus:outline-none" placeholder="Müzik, albüm, playlist veya sanatçı ara" />
      </label>
      <div>
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex gap-1 items-center">
                <img src="https://i.scdn.co/image/ab6775700000ee85d72bbacc70c8210c55cea26a" className="w-8 h-8 rounded-full border border-neutral-300" />
                <span className="text-neutral-700 font-semibold">
                    vbattalshn
                </span>
                <ArrowDown />
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="p-1 bg-neutral-200 border border-neutral-300 rounded-lg flex flex-col gap-1 absolute right-0 mt-2 w-56 origin-top-right shadow-lg">
                    <Menu.Item>
                        {({ active }) => (
                        <Link href="/" className={"flex items-center gap-1 p-1 hocus:bg-indigo-600/25 text-neutral-700 font-medium hocus:text-indigo-600 rounded transition-all " + (active && "!text-indigo-600 !bg-indigo-600/25")}>
                            Profil
                        </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                        <Link href="/" className={"flex items-center gap-1 p-1 hocus:bg-indigo-600/25 text-neutral-700 font-medium hocus:text-indigo-600 rounded transition-all " + (active && "!text-indigo-600 !bg-indigo-600/25")}>
                            Hesap
                        </Link>
                        )}
                    </Menu.Item>
                    <span className="w-full h-[2px] bg-slate-300" />
                    <Menu.Item disabled>
                        {({ active }) => (
                        <Link href="/" disabled className={"flex items-center gap-1 p-1 text-neutral-700 font-medium rounded transition-all opacity-50 " + (active && "!text-indigo-600 !bg-indigo-600/25")}>
                            Arkadaşını Davet Et
                        </Link>
                        )}
                    </Menu.Item>
                    <span className="w-full h-[2px] bg-slate-300" />
                    <Menu.Item>
                        {({ active }) => (
                        <Link href="/" className={"flex items-center gap-1 p-1 hocus:bg-indigo-600/25 text-neutral-700 font-medium hocus:text-indigo-600 rounded transition-all " + (active && "!text-indigo-600 !bg-indigo-600/25")}>
                            Çıkış Yap
                        </Link>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
      </div>
    </header>
  );
}

function ArrowDown(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M16.6 7.458l-5.433 5.434a1.655 1.655 0 01-2.334 0L3.4 7.458" ></path>
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2"></path>
    </svg>
  );
}