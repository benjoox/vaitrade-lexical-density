const { isSpecialCharacter, convertToArrayOfWords } = require('../_utils')
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&','*','(',')',',','.','?','"',':', '{', '}' ,'|', '<','>', ""]

describe('isSpecialCharacter should', () => {
    test('ignore string with special characters at the end of a string', () => {
        const str = 'hello?'
        expect(isSpecialCharacter(str)).toBe(false)
    })

    specialCharacters.map(el => 
        test(`recognise ${el} as a special character`, () => {
            el => expect(isSpecialCharacter(el)).toBe(true)
        })
    )

    test(`recognise "" as a special character`, () => {
        el => expect(isSpecialCharacter("")).toBe(true)
    })

    test('ignore string with special characters at the begining of a string ', () => {
        const str = '!hello'
        expect(isSpecialCharacter(str)).toBe(false)
    })
})

describe('convertToArrayOfWords: split the words into an array which should ', () => {
    test('convert a string to array of words', () => {
      const testInput = 'This is an input ? test. something else'
      const arrayOfWords = convertToArrayOfWords(testInput)
      expect(Array.isArray(arrayOfWords)).toBe(true);
      expect(arrayOfWords).toHaveLength(7)
      expect(arrayOfWords).toEqual(['this', 'is', 'an', 'input', 'test', 'something', 'else'])
    })
  })