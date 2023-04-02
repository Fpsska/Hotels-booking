import { IsortBtn, Ihotel, IhotelSliderImage } from 'types/generalTypes';

// /. imports

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

export const mockFavouriteHotelsData: Ihotel[] = [
    {
        id: 1,
        fullName: 'Mock Data Form slice #1',
        date: '1 апреля 2023',
        duration: '1 день',
        price: 2222,
        _score: 1,
        isFavourite: true
    },
    {
        id: 2,
        fullName: 'Mock Data Form slice #2',
        date: '1 апреля 2023',
        duration: '1 день',
        price: 1111,
        _score: 2,
        isFavourite: true
    }
];

export const mockHotelSliderImages: IhotelSliderImage[] = [
    {
        id: 1,
        imageUrl: 'slider-image_1.jpg'
    },
    {
        id: 2,
        imageUrl: 'slider-image_2.jpg'
    },
    {
        id: 3,
        imageUrl: 'slider-image_3.jpg'
    },
    {
        id: 4,
        imageUrl: 'slider-image_4.jpg'
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
