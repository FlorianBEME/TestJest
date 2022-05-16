const getDisplayName = (firstName: string, lastName: string, city: string = '', curriculum: string = '') => {
    return `[${city.length === 0 ? '?' : city}] ${firstName} ${lastName}${curriculum === 'workstudy' ? ' - WnS' : ''}`
}

export default getDisplayName
