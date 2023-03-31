export function getCurrentDate(type: string): string {
    const date = new Date();

    const options: { [key: string]: string } = {
        year: 'numeric',
        month: type === 'combined' ? 'long' : 'numeric',
        day: 'numeric'
    };

    switch (type) {
        case 'numeric':
            return date.toISOString().replace(/T.*/, '').split('-').join('-'); // 2023-03-31 (YEAR/MONTH/DAY)
        case 'combined':
            return date
                .toLocaleDateString('ru-RU', options)
                .replace(/[г.]/g, ''); // 31 марта 2023
    }
    return date.toLocaleDateString('ru-RU', options); // 31 марта 2023
}
