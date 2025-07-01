const { DateTime } = require('luxon')

const formattedDate = (date) => {
    return DateTime.fromISO(date, { zone: 'utc' }).startOf('day')
}

const getExpireDate = (date) => {
    return DateTime.fromISO(date).toUTC().endOf('day')
}

const calculateDaysStay = (checkIn, checkOut) => {
    const inDate = DateTime.fromJSDate(checkIn, { zone: 'utc' }).startOf('day')
    const outDate = DateTime.fromJSDate(checkOut, { zone: 'utc' }).startOf('day')

    const days = Math.round(outDate.diff(inDate, 'days').days)

    return days > 0 ? days : 0
}

module.exports = {
    formattedDate,
    calculateDaysStay,
    getExpireDate
}