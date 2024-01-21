const check = (req, res, next) => {
    console.log('Authorize middleware');
    const { name } = req.query;

    if (name === 'john') {
        res.status(200).send('Authorized');
        req.user = { name: 'john', id: 3 }
        // this is just for practice, in real world we check the JWT(JSON Web Token)
        // If the token exist we communicate with the database to get the user data. 
    } else res.status(401).send('Unauthorized');
}

module.exports = check;