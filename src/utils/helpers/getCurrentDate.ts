export function getCurrentDate(type: string): string {
    const date = new Date();

    const options: { [key: string]: string } = {
        year: 'numeric',
        month: type === 'numeric' ? 'numeric' : 'long',
        day: 'numeric'
    };

    switch (type) {
        case 'numeric':
            return date.toLocaleDateString('ru-RU', options); // 03.07.2020 format
        case 'combined':
            return date
                .toLocaleDateString('ru-RU', options)
                .replace(/[г.]/g, ''); // 03 july 2020 format
    }
    return date.toLocaleDateString('ru-RU', options); // 03 july 2020 format
}
