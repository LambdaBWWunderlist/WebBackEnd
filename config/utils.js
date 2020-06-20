module.exports = {
    createTimestamp
}

//Generates a UTC timestamp in the format: YYYY-MM-DD HH:MM:SS
function createTimestamp() {
    const timestamp = new Date()
    return timestamp.toISOString().replace('T', ' ').slice(0, 19)
}
