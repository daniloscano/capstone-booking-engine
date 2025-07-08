const calculateAncillaryPrice = (ancillary, nights, adults, children) => {
    switch (ancillary.allocation) {
        case 'perNight':
            return ancillary.price * nights
        case 'perOccupancy':
            return ancillary.price * (adults + children)
        default:
            return ancillary.price
    }
}

module.exports = calculateAncillaryPrice