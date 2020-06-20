module.exports = (req, res, next) => {
    const { recurring } = req.body

    if (recurring) {
        if (
            recurring === null ||
            recurring === 'daily' ||
            recurring === 'weekly' ||
            recurring === 'monthly'
        ) {
            next()
        }
        else {
            res.status(400).json({ message: 'invalid recurring type. provide null, daily, weekly or monthly' })
        }
    }
    else {
        next()
    }
}