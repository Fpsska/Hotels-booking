import {
    IsortBtn,
    Ihotel,
    IhotelSliderImage,
    IratingStar
} from 'types/generalTypes';

// /. imports

export const sortButtonsData: IsortBtn[] = [
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
        hotelId: 1,
        hotelName: 'Mock Data Form slice #1',
        location: 'Redux',
        date: '1 апреля 2023',
        duration: '1 день',
        priceAvg: 11111,
        stars: 4,
        isFavourite: true
    },
    {
        hotelId: 2,
        hotelName: 'Mock Data Form slice #2',
        location: 'Redux',
        date: '1 апреля 2023',
        duration: '1 день',
        priceAvg: 22222,
        stars: 3,
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

export const starRatingData: IratingStar[] = [
    {
        id: 1,
        isFilled: false
    },
    {
        id: 2,
        isFilled: false
    },
    {
        id: 3,
        isFilled: false
    },
    {
        id: 4,
        isFilled: false
    },
    {
        id: 5,
        isFilled: false
    }
];
