const formattedDate = (date) => {
    return date.startOf('day')
}

const calculateDaysStay = (checkIn, checkOut) => {
    const inDate = checkIn.startOf('day')
    const outDate = checkOut.startOf('day')

    const days = outDate.diff(inDate, 'days').days

    return days > 0 ? days : 0
}

module.exports = {
    formattedDate,
    calculateDaysStay
}