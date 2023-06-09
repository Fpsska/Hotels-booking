export interface Ihotel {
    hotelId: number;
    hotelName: string;
    location: any;
    checkIn: string;
    duration: number;
    priceAvg: number;
    stars: number;
    isFavourite: boolean;
}

export interface IsortBtn {
    id: number;
    role: string;
    text: string;
    label: string;
    statuses: { [key: string]: boolean };
}

export interface IhotelSliderImage {
    id: number;
    imageUrl: string;
}

export interface IratingStar {
    id: number;
    isFilled: boolean;
}
