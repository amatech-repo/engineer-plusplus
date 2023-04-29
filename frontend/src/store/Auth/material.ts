import { atom } from 'recoil'

export const materialState = atom({
    key: 'material',
    default: {
        title: '',
        author: '',
        description: '',
        categoryId: '',
        url: '',
        image: '',
        tags: [''],
    },
})