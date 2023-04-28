import { atom } from 'recoil'

export const materialState = atom({
    key: 'material',
    default: {
        title: '',
        author: '',
        description: '',
        categoryID: '',
        url: '',
        image: '',
        tags: [''],
    },
})