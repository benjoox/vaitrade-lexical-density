const { nonLexicals } = require('./database/seed.json')
/* 
* Given a string of data returns the 
* lexical density of the string fixed 
* two decimal points
*
*  	input string
*	return float
*/
const overallScore = line => {
	const lineArray = line.toLowerCase().split(" ")
    const lexicals = lineArray.filter(el => {
        return !nonLexicals.includes(el)
    })
    return parseFloat(lexicals.length / lineArray.length.toFixed(2))
}

/* 
* NOTE !! I have made an assumption that each 
* sentence is a string that ends with a dot 
*
* Given a string of data returns the 
* lexical density of each sentence fixed 
* two decimal points
*	

*  	input string
*	return Array
*/

const sentenceScore = data => {
    const lines = data.split(".")
    return lines.map(line =>  overallScore(line, nonLexicals))
}

module.exports = {
    sentenceScore,
    overallScore
}

