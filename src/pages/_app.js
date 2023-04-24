import '@/styles/globals.css'
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Player from "@/components/Player";
import { useRouter } from "next/router";
import store from '@/store/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  {
    if(router.pathname != "/login" && router.pathname != "/signup" && router.pathname != "/forgot-password" && router.pathname != "/reset-password/[...all]"){
    return(
      <Provider store={store}>
      <div className="flex relative wrapper">
          <Sidebar />
          <div className="container flex flex-col">
              <Header />
              <div>
                <Component {...pageProps} />
              </div>
          </div>
      </div>
      <Player />
      </Provider>
    )
    }else{
    return(
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
    }
  }
}
