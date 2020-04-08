const AUTHENTICATION_ERROR = 'You want to access this resource? '  
+ 'Add a token to the body of your request and set it to a truthy value. ' 
+ 'ie. token: true'

module.exports = (req, res, next) => {
    const { token=false } = req.body;
    if(!token) throw new Error(AUTHENTICATION_ERROR)

    next()
}
