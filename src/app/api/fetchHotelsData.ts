interface propTypes {
    location: string;
    lang: string;
    limit: number;
}

// /. interfaces

export async function fetchHotelsData(props: propTypes): Promise<any> {
    const { location, lang, limit } = props;

    try {
        const URL = `http://engine.hotellook.com/api/v2/lookup.json?query=${location}&lang=${lang}&lookFor=hotel&limit=${limit}`;

        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error('some error with response of osrm.org ');
        }

        return await response.json();
    } catch (err: any) {
        throw new Error(err.message);
    }
}
