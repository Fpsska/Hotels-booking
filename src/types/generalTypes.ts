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

export interface IhotelSliderImage {
    id: number;
    imageUrl: string;
}
