const { DateTime } = require('luxon')

const formattedDate = (date) => {
    return DateTime.fromISO(date).startOf('day')
}

const getExpireDate = (date) => {
    return DateTime.fromISO(date).endOf('day')
}

const calculateDaysStay = (checkIn, checkOut) => {
    const inDate = DateTime.fromISO(checkIn).startOf('day')
    const outDate = DateTime.fromISO(checkOut).startOf('day')

    const days = outDate.diff(inDate, 'days').days

    return days > 0 ? days : 0
}

module.exports = {
    formattedDate,
    calculateDaysStay,
    getExpireDate
}