const specialCharacters = ['!', '@', '#', '$', '%', '^', '&','*','(',')',',','.','?','"',':', '{', ',}' ,'|', '<','>', '']

const isSpecialCharacter = element => specialCharacters.includes(element)

const convertToArrayOfWords = data => {
    return data
    .toLowerCase()
    .split(".") // For cases where there are no spaces between a word and a dot
    .map(el => el.split(" "))
    .reduce((acc, curr) => [...acc, ...curr])
    // Remove all the standalone special characters. eg. '?'
    // TODO: eliminate the numbers from the list if required. eg. 432
    .filter(el => !isSpecialCharacter(el)) 
}

module.exports = {
    convertToArrayOfWords,
    isSpecialCharacter 
}