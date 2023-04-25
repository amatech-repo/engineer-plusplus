import { atom } from 'recoil'

export const materialState = atom({
    key: 'material',
    default: {
        id: null,
        title: '',
        author: '',
        description: '',
        categoryID: '',
        url: '',
        image: '',
    },
})