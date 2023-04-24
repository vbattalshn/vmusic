import { configureStore } from '@reduxjs/toolkit'
import musicPlayer from './musicPlayer'
export default configureStore({
  reducer: {
    musicPlayer,
  },
})
