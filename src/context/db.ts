export interface Ihotel {
    id: number;
    fullName: string;
    date: string;
    duration: string;
    price: number;
    _score: number;
    isFavourite: boolean;
}

export interface IsortBtn {
    id: number;
    role: string;
    text: string;
    label: string;
    statuses: { [key: string]: boolean };
}

export const mockButtonsData: IsortBtn[] = [
    {
        id: 1,
        role: 'rating',
        text: 'Рейтинг',
        label: 'sort by rating',
        statuses: {
            isSortedByASC: false,
            isSortedByDES: false
        }
    },
    {
        id: 2,
        role: 'price',
        text: 'Цена',
        label: 'sort by price',
        statuses: {
            isSortedByASC: false,
            isSortedByDES: false
        }
    }
];

// export const mockHotelsListData: Ihotel[] = [
//     {
//         id: 1,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: false
//     },
//     {
//         id: 2,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: false
//     },
//     {
//         id: 3,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: false
//     },
//     {
//         id: 4,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: false
//     },
//     {
//         id: 5,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: false
//     },
//     {
//         id: 6,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: false
//     },
//     {
//         id: 7,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: false
//     },
//     {
//         id: 8,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: false
//     },
//     {
//         id: 9,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: false
//     },
//     {
//         id: 10,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: false
//     }
// ];

// export const mockFavouriteHotelsListData: Ihotel[] = [
//     {
//         id: 1,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: true
//     },
//     {
//         id: 2,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: true
//     },
//     {
//         id: 3,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: true
//     },
//     {
//         id: 4,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: true
//     },
//     {
//         id: 5,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: true
//     },
//     {
//         id: 6,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: true
//     },
//     {
//         id: 7,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: true
//     },
//     {
//         id: 8,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: true
//     },
//     {
//         id: 9,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: true
//     },
//     {
//         id: 10,
//         name: 'Moscow Marriott Grand Hotel',
//         date: '7 июля 2020',
//         duration: '1 день',
//         price: 23924,
//         rating: 3,
//         isFavourite: true
//     }
// ];
