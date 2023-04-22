import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'

export default function login(){
    const [isSending, setSending] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)

    return(
        <>
        <Head>
            <title>Giriş Yap - VMusic</title>
        </Head>
        <main className="container mx-auto flex flex-col justify-center items-center gap-4 p-4 w-full h-screen">
            <svg xmlns="http://www.w3.org/2000/svg" width="116" height="48" fill="none" viewBox="0 0 116 48" >
                <path stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.28 34a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24z"></path>
                <path stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28.84 28.8V16.6c0-2.6-1.63-2.96-3.28-2.51l-6.24 1.7c-1.14.31-1.92 1.21-1.92 2.51v12.57"></path>
                <path stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M25.72 31.92a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24zM17.4 21.52l11.44-3.12" ></path>
                <path fill="#4F46E5" d="M43.38 16.454l3.786 11.45h.15l3.778-11.45h2.898L48.864 31H45.61l-5.12-14.546h2.89z" ></path>
                <path fill="#262626" d="M54.907 16.454h3.225l4.318 10.54h.17l4.319-10.54h3.224V31h-2.528v-9.993H67.5l-4.02 9.95h-1.89l-4.02-9.971h-.134V31h-2.529V16.454zm23.965 9.958V20.09h2.57V31H78.95v-1.939h-.114a3.28 3.28 0 01-1.214 1.499c-.559.388-1.248.582-2.067.582-.715 0-1.347-.159-1.896-.476-.545-.322-.97-.788-1.279-1.399-.307-.616-.461-1.359-.461-2.23V20.09h2.57v6.548c0 .692.19 1.24.569 1.648.379.407.876.61 1.491.61.38 0 .746-.092 1.101-.276.355-.185.646-.46.874-.824.232-.37.348-.831.348-1.385zm12.837-3.438l-2.344.256a1.882 1.882 0 00-.348-.668 1.728 1.728 0 00-.653-.504c-.275-.128-.611-.192-1.009-.192-.535 0-.985.117-1.35.349-.36.232-.537.532-.532.901a.944.944 0 00.348.775c.242.199.64.362 1.193.49l1.861.397c1.032.223 1.8.576 2.301 1.059.507.483.762 1.115.767 1.896a2.967 2.967 0 01-.603 1.818c-.394.521-.94.928-1.641 1.222-.7.293-1.506.44-2.415.44-1.335 0-2.41-.28-3.224-.838-.815-.563-1.3-1.347-1.456-2.35l2.507-.242c.113.492.355.864.724 1.115.37.25.85.376 1.442.376.61 0 1.1-.125 1.47-.376.374-.251.561-.561.561-.93 0-.313-.12-.571-.362-.775-.237-.203-.606-.36-1.108-.469l-1.86-.39c-1.047-.218-1.821-.585-2.323-1.101-.502-.52-.75-1.179-.746-1.974-.005-.673.178-1.255.547-1.748.374-.497.892-.88 1.555-1.15.668-.275 1.437-.412 2.309-.412 1.278 0 2.284.272 3.018.817.739.544 1.196 1.28 1.37 2.208zM93.063 31V20.09h2.571V31h-2.57zm1.293-12.457a1.5 1.5 0 01-1.051-.405 1.305 1.305 0 01-.44-.987c0-.389.146-.718.44-.988a1.485 1.485 0 011.05-.412c.413 0 .763.138 1.052.412.294.27.44.6.44.988 0 .383-.146.712-.44.987-.289.27-.64.405-1.051.405zm7.681 12.67c-1.089 0-2.025-.239-2.806-.717a4.79 4.79 0 01-1.797-1.982c-.416-.847-.625-1.823-.625-2.926 0-1.108.213-2.086.64-2.933.426-.852 1.027-1.515 1.803-1.989.782-.478 1.705-.717 2.77-.717.886 0 1.669.163 2.351.49a4.013 4.013 0 011.641 1.37c.407.588.639 1.274.696 2.06h-2.458a2.347 2.347 0 00-.71-1.314c-.369-.355-.864-.532-1.484-.532-.526 0-.987.142-1.385.426-.398.28-.708.682-.93 1.207-.218.526-.327 1.156-.327 1.89 0 .743.109 1.382.327 1.917.217.53.523.94.916 1.229.397.284.864.426 1.399.426.379 0 .717-.071 1.016-.213.303-.147.556-.358.759-.632.204-.275.344-.609.419-1.002h2.458c-.062.772-.289 1.456-.682 2.053a4.038 4.038 0 01-1.605 1.392c-.677.331-1.473.497-2.386.497z" ></path>
            </svg>
            <div className="flex flex-col gap-2 max-w-xs w-full">
                {errorMessage&&
                    <div class="px-4 py-3 w-full bg-red-600 rounded-lg text-neutral-100 font-medium">{errorMessage}</div>
                }
                <input 
                    type="email"
                    autoComplete="email"
                    name="email"
                    placeholder="E-posta adresi"
                    className="px-4 py-3 rounded-lg bg-neutral-300/50 text-neutral-700 placeholder:text-neutral-500 font-medium border border-neutral-300 transition-all shadow-inner shadwo-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600/50 focus:outline-none"
                />
                <input 
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    placeholder="Şifre"
                    className="px-4 py-3 rounded-lg bg-neutral-300/50 text-neutral-700 placeholder:text-neutral-500 font-medium border border-neutral-300 transition-all shadow-inner shadwo-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600/50 focus:outline-none"
                />
                <Link href="/forgot-password" className="w-full text-end text-sm font-medium text-indigo-600 hocus:underline">Şifreni mi unuttun?</Link>
                <button
                    type="submit"
                    disabled={isSending}
                    className='px-4 py-3 flex justify-center items-center rounded-lg bg-indigo-600 text-neutral-100 font-medium border border-indigo-600 transition-all focus:ring focus:ring-indigo-600/50 focus:outline-none focus:bg-indigo-600/50 disabled:opacity-50'
                >
                    {isSending&&
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-neutral-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    }
                    Giriş Yap
                </button>
                <div className='text-sm text-neutral-500 font-medium text-center'>
                    Hesabın yok mu? 
                    <Link href="/signup" className="mx-2 w-full text-end text-sm font-medium text-indigo-600 hocus:underline">Kayıt Ol</Link>
                </div>
            </div>
        </main>
        </>
    )
}