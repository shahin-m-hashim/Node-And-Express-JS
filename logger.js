const logger = (req, res, next) => {
    console.log('Logger middleware');
    console.log('Request URL: ', req.url, ' Request method: ', req.method);
    next();
}

module.exports = logger;