/* 
* Given a string of data returns the 
* lexical density of the string fixed 
* two decimal points
*
*  	input string
*	return float
*/
const overallScore = line => {
	const lineArray = line.split(" ")
	console.log('the line is ', lineArray)
    const lexicals = lineArray.filter(el => !nonLexicalCollection.includes(el))
    return parseFloat(lexicals.length / line.length).toFixed(2)
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
    return lines.map(line =>  overallScore(line, nonLexicalCollection))
}

module.exports = {
    sentenceScore,
    overallScore
}

const nonLexicalCollection = [ 
	"is",
	"have",
	"and",
	"although",
	"or",
	"that",
	"when",
	"while",
	"a",
	"either",
	"more",
	"much",
	"neither",
	"my",
	"that",
	"the",
	"as",
	"no",
	"nor",
	"not",
	"at",
	"between",
	"in",
	"of",
	"without",
	"I",
	"you",
	"he",
	"she",
	"it",
	"we",
	"they",
	"anybody",
	"one"
	]