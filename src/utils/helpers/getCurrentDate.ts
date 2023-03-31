export function getCurrentDate(date: any, type?: string): string {
    const options: { [key: string]: string } = {
        year: 'numeric',
        month: type === 'combined' ? 'long' : 'numeric',
        day: 'numeric'
    };

    if (typeof date === 'object') {
        // when received new Date()
        return date.toISOString().replace(/T.*/, '').split('-').join('-'); // 2023-03-31 (YEAR/MONTH/DAY)
    } else {
        // when received string
        const newDate = new Date(date);
        return newDate
            .toLocaleDateString('ru-RU', options)
            .replace(/[г.]/g, ''); // 31 марта 2023
    }
}
