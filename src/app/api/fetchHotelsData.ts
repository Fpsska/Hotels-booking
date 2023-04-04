interface propTypes {
    location: string;
    lang: string;
    checkIn: string; // YYYY-MM-DD
    duration: number;
    limit: number;
}

import { getCurrentDate } from 'utils/helpers/getCurrentDate';

// /. interfaces

export async function fetchHotelsData(props: propTypes): Promise<any> {
    const { location, lang, checkIn, duration, limit } = props;

    const today = new Date(checkIn);
    const checkOut = getCurrentDate(
        new Date(new Date().setDate(today.getDate() + duration))
    );
    console.log(
        'checkIn:',
        checkIn,
        '/',
        'checkOut:',
        checkOut,
        'duration:',
        duration
    );

    // /. variables

    try {
        const URL = `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&lang=${lang}&checkIn=${checkIn}&checkOut=${checkOut}&limit=${limit}`;

        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error('some error with response of engine.hotellook.com');
        }

        return await response.json();
    } catch (err: any) {
        throw new Error(err.message);
    }
}
