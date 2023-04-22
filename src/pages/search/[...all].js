import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Player from "@/components/Player";
import Head from "next/head";

export default function Home(){
    return(
        <>
        <Head>
            <title>VMusic</title>
        </Head>
        <div className="flex wrapper">
            <Sidebar />
            <div className="container flex flex-col">
                <Header />
                <span>
                    Search
                </span>
            </div>
        </div>
        <Player />
        </>
    )
}