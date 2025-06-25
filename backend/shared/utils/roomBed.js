const generateLayout = (king, single, crib) => {
    const layout = []

    if (king > 0) {
        layout.push(king === 1 ? 'M' : `${king}M`)
    }

    if (single > 0) {
        layout.push(single === 1 ? 'L' : `${single}L`)
    }

    if (crib > 0) {
        layout.push(crib === 1 ? 'C' : `${crib}C`)
    }

    return layout.join('')
}

module.exports = generateLayout