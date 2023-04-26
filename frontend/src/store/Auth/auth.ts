import { atom } from 'recoil'
import {recoilPersist  } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const signInUserState = atom({
  key: 'auth/signIn',
  default: {
    uid: null,
    accessToken: null,
  },
  effects_UNSTABLE: [persistAtom]
})