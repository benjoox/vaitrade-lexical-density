const { convertToArrayOfWords } = require('../controllers/_utils')

const CHARACTERS_OUT_OF_BOUND_ERROR = 'Upto 1000 characters are allowed as an input'
const WORD_COUNT_EXCEEDS_LIMIT_ERROR = 'Upto 100 words are allowed as an input'
const EMPTY_DATA_ERROR = 'You should provide a series of string as a url parameter. The parameter name should be data'

module.exports = (req, res, next) => {
    const { data } = req.query;
    if(!data || Object.keys(data).length === 0) throw new Error(EMPTY_DATA_ERROR)
    
    if(data.length > 1000) 
        throw new Error(CHARACTERS_OUT_OF_BOUND_ERROR)

    const lineArray = convertToArrayOfWords(data)    
    if(lineArray.length > 100) 
        throw new Error(WORD_COUNT_EXCEEDS_LIMIT_ERROR)

    next()
}