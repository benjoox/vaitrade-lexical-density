const { nonLexicals } = require('../database/seed.json')
const { convertToArrayOfWords } = require('./_utils');

const convertArrayToLowerCase = arr => arr.map(el => el.toLowerCase())
/* 
* Given a string of data returns the 
* lexical density of the string fixed 
* two decimal points
*
*  	input string
*	return float
*/
const overallScore = line => {
    const lineArray = convertToArrayOfWords(line)
    const lowerCaseNonLexicals = convertArrayToLowerCase(nonLexicals)

    const lexicals = lineArray.filter(el => {
        return !lowerCaseNonLexicals.includes(el.toLowerCase())
    })
    return parseFloat((lexicals.length / lineArray.length).toFixed(2))
}

/* 
* NOTE !! I have made an assumption that each 
* sentence is a series of strings that ends with a dot 
*
* Given a string of data returns the 
* lexical density of each sentence with
* two decimal points
*	
*  	input string
*	return Array
*/

const sentenceScore = data => {
    const lines = data.split(".").filter(el => el !== "")
    return lines.map(line => {
        console.log('line is ', line)
        return overallScore(line)})
}

module.exports = {
    sentenceScore,
    overallScore
}

