const check = (req, res, next) => {
    console.log('Authorize middleware');
    next();
}

module.exports = check;