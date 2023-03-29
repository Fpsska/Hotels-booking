interface Ihotel {
    id: number;
    name: string;
    date: string;
    duration: string;
    price: number;
    rating: number;
    isFavourite: boolean;
}

export const mockHotelsListData: Ihotel[] = [
    {
        id: 1,
        name: 'Moscow Marriott Grand Hotel',
        date: '7 июля 2020',
        duration: '1 день',
        price: 23924,
        rating: 3,
        isFavourite: false
    },
    {
        id: 2,
        name: 'Moscow Marriott Grand Hotel',
        date: '7 июля 2020',
        duration: '1 день',
        price: 23924,
        rating: 3,
        isFavourite: false
    },
    {
        id: 3,
        name: 'Moscow Marriott Grand Hotel',
        date: '7 июля 2020',
        duration: '1 день',
        price: 23924,
        rating: 3,
        isFavourite: false
    },
    {
        id: 4,
        name: 'Moscow Marriott Grand Hotel',
        date: '7 июля 2020',
        duration: '1 день',
        price: 23924,
        rating: 3,
        isFavourite: false
    },
    {
        id: 5,
        name: 'Moscow Marriott Grand Hotel',
        date: '7 июля 2020',
        duration: '1 день',
        price: 23924,
        rating: 3,
        isFavourite: false
    }
];

export const mockFavouriteHotelsListData: Ihotel[] = [
    {
        id: 1,
        name: 'Moscow Marriott Grand Hotel',
        date: '7 июля 2020',
        duration: '1 день',
        price: 23924,
        rating: 3,
        isFavourite: true
    },
    {
        id: 2,
        name: 'Moscow Marriott Grand Hotel',
        date: '7 июля 2020',
        duration: '1 день',
        price: 23924,
        rating: 3,
        isFavourite: true
    },
    {
        id: 3,
        name: 'Moscow Marriott Grand Hotel',
        date: '7 июля 2020',
        duration: '1 день',
        price: 23924,
        rating: 3,
        isFavourite: true
    },
    {
        id: 4,
        name: 'Moscow Marriott Grand Hotel',
        date: '7 июля 2020',
        duration: '1 день',
        price: 23924,
        rating: 3,
        isFavourite: true
    },
    {
        id: 5,
        name: 'Moscow Marriott Grand Hotel',
        date: '7 июля 2020',
        duration: '1 день',
        price: 23924,
        rating: 3,
        isFavourite: true
    }
];
