import { createSlice } from '@reduxjs/toolkit'

export const musicPlayer = createSlice({
  name: 'musicPlayer',
  initialState: {
    currentMusic: {
        "name": "Odamda Hayalin Saklı",
        "artists": [
            {
                "name": "Mavi Gri",
                "path": "/artist/mavi-gri"
            }
        ],
        "src": "/assets/Odamda_Hayalin_Sakli-Mavi_Gri.mp3",
        "thumbnail": "https://i.scdn.co/image/ab67616d0000b273742cdca02ed0b417879c2698",
    },
    nextMusic: [
        {           
            "name": "Ben Böyleyim",
            "artists": [
                {
                    "name": "Athena",
                    "path": "/artist/athena"
                }
            ],
            "src": "/assets/Ben_Böyleyim-Athena.mp3",
            "thumbnail": "https://e-cdn-images.dzcdn.net/images/cover/965fe126455916754149b2300ebcbb66/264x264-000000-80-0-0.jpg",
        },
        {           
            "name": "Cesaretsizce Olmuyor",
            "artists": [
                {
                    "name": "Jabbar",
                    "path": "/artist/jabbar"
                }
            ],
            "src": "/assets/Cesaretsizce_Olmuyor-Jabbar.mp3",
            "thumbnail": "https://e-cdn-images.dzcdn.net/images/cover/5de68b62648673c6e345abdd9c60080c/800x800-000000-80-0-0.jpg",
        },
        {           
            "name": "Herkes Memur Olmak Ister Bense Oyle Bir Sey Istemem",
            "artists": [
                {
                    "name": "OrkunDK",
                    "path": "/artist/orkundk"
                }
            ],
            "src": "/assets/Herkes_Memur_Olmak_Ister_Bense_Oyle_Bir_Sey_Istemem-OrkunDk.mp3",
            "thumbnail": "https://e-cdn-images.dzcdn.net/images/cover/b4173abaf7093ecbaf5ea87f3a3529b8/264x264-000000-80-0-0.jpg",
        },
        {           
            "name": "Kime Ne",
            "artists": [
                {
                    "name": "Athena",
                    "path": "/artist/athena"
                }
            ],
            "src": "/assets/Kime_Ne-Athena.mp3",
            "thumbnail": "https://e-cdn-images.dzcdn.net/images/cover/b8020bbf9bf4442f563302bf289d7322/264x264-000000-80-0-0.jpg",
        },
        {           
            "name": "MENEMÉN",
            "artists": [
                {
                    "name": "OrkunDK",
                    "path": "/artist/orkundk"
                },
                {
                    "name": "Perry Aye",
                    "path": "/artist/perry-aye"
                },
                {
                    "name": "Joddie",
                    "path": "/artist/joddie"
                }
            ],
            "src": "/assets/Menemen-OrkunDk.mp3",
            "thumbnail": "https://e-cdn-images.dzcdn.net/images/cover/ea614215bacea94d49d99daf45ea0b6a/264x264-000000-80-0-0.jpg",
        },
        {           
            "name": "Olmadı Yar",
            "artists": [
                {
                    "name": "Duman",
                    "path": "/artist/duman"
                }
            ],
            "src": "/assets/Olmadi_Yar-Duman.mp3",
            "thumbnail": "https://e-cdn-images.dzcdn.net/images/cover/876916e7c67fc83027e9177f31ec5e2f/264x264-000000-80-0-0.jpg",
        },
    ],
    backMusic: [],
    playerOptions: {
        "shuffle": false,
        "repeat": false
    },
  },
  reducers: {
    setCurrentMusic: (state, action) => {
        state.currentMusic = action.payload;
    },
    addBackMusic: (state, action) => {
        state.backMusic.push(action.payload);
    },
    playNextMusic: (state) => {
        if(state.nextMusic.length != 0){
            if (state.playerOptions.shuffle) {
                const randomIndex = Math.floor(Math.random() * state.nextMusic.length);
                state.backMusic.push(state.currentMusic);
                state.currentMusic = state.nextMusic[randomIndex];
                state.nextMusic.splice(randomIndex, 1);    
            }else{
                state.backMusic.push(state.currentMusic);
                state.currentMusic = state.nextMusic[0];
                state.nextMusic.splice(0, 1);    
            }
        }
    },
    playBackMusic: (state) => {
        if(state.backMusic.length != 0){
            state.nextMusic.unshift(state.currentMusic);
            state.currentMusic = state.backMusic[state.backMusic.length - 1];
            state.backMusic.splice(state.backMusic.length - 1, 1);        
        }
    },
    switchShuffle: (state) => {
        state.playerOptions.shuffle = !state.playerOptions.shuffle;
    },
    switchRepeat: (state) => {
        state.playerOptions.repeat = !state.playerOptions.repeat;
    }
  },
})

export const { setCurrentMusic, addBackMusic, playNextMusic, playBackMusic, switchShuffle, switchRepeat } = musicPlayer.actions
export default musicPlayer.reducer