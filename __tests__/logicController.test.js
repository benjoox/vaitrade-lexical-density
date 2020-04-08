const { overallScore, sentenceScore } = require('../logicController')

jest.mock('../database/seed.json', () => ({ nonLexicals: [ 'this' ] }), )
    const { nonLexicals } = require('../database/seed.json')
    console.log('nonLexicals ', nonLexicals)

describe('Testing overallScore function', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  test('should return the density correctly', () => {
    const testInput = 'This is an input test'
    const expectedResult = 4 / 5;
    expect(overallScore(testInput)).toEqual(expectedResult);
  })

  test('should ignore case sensivity for non lexicals', () => {
    const testInput = 'ThIs is an input test'
    const expectedResult = 4 / 5;
    expect(overallScore(testInput)).toEqual(expectedResult);
  })
});