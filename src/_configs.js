export const process = {
    dev: true
}

export const site = {
    home: process.dev ? "http://localhost:8080/" : "https:mysite.ru"
}

export const app = {
    title: 'Notes'
}

export const links = [
    {
        title: 'Главная',
        alias: 'Home',
        url: '/'
    },
    {
        title: 'О нас',
        alias: 'About',
        url: '/about'
    }
]

export const notes = [
    {
        id: 1,
        title: 'task1',
        tags: [
            {
                id: 1,
                name: 'home',
            },
            {
                id: 2,
                name: 'work',
            },
        ],
    },
    {
        id: 2,
        title: 'task2',
        tags: [
            {
                id: 3,
                name: 'travel',
            }
        ],
    },
    {
        id: 3,
        title: 'task3',
        tags: [],
    },
]

export const tags = [
    {
        id: 1,
        name: 'home',
    },
    {
        id: 2,
        name: 'work',
    },
    {
        id: 3,
        name: 'travel',
    },
]