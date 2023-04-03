interface propTypes {
    location: string;
    lang: string;
    limit: number;
}

// /. interfaces

export async function fetchHotelsData(props: propTypes): Promise<any> {
    const { location, lang, limit } = props;

    try {
        const URL = `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&lang=${lang}&checkIn=2023-04-01&checkOut=2023-04-03&limit=${limit}`;

        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error('some error with response of osrm.org ');
        }

        return await response.json();
    } catch (err: any) {
        throw new Error(err.message);
    }
}
