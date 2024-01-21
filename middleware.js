const check = (req, res, next) => {
    console.log('Check middleware');
    next();
}

module.exports = check;