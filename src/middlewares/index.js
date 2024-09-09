const validateCheck = (req, res, next) => {
    if(!req.body.modelNumber || !req.body.capacity){
    return res.status(401).send('Invalid request')
    }
    next();
}

module.exports = validateCheck;