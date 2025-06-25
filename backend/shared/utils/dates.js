const { DateTime } = require('luxon')

const formattedDate = (date) => {
    return DateTime(date).startOf('day')
}

const getExpireDate = (date) => {
    return DateTime(date).endOf('day')
}

const calculateDaysStay = (checkIn, checkOut) => {
    const inDate = DateTime(checkIn).startOf('day')
    const outDate = DateTime(checkOut).startOf('day')

    const days = outDate.diff(inDate, 'days').days

    return days > 0 ? days : 0
}

module.exports = {
    formattedDate,
    calculateDaysStay,
    getExpireDate
}