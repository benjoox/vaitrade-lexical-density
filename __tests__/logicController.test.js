const { overallScore, sentenceScore } = require('../src/controllers/logicController')

jest.mock('../src/database/seed.json', () => ({ nonLexicals: [ 'this', 'an', 'WiTh' ] }), { virtual: true })

describe('overallScore function should', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  
  test('return the density correctly', () => {
    const testInput = 'This is an input test'
    const expectedResult = 3 / 5;

    expect(overallScore(testInput)).toEqual(expectedResult);
  })

  test('ignore case sensivity for non lexicals', () => {
    const testInput = 'ThIs is an input test'
    const expectedResult = 3 / 5;

    expect(overallScore(testInput)).toEqual(expectedResult);
  })

  test('handle multiple sentences', () => {
    const testInput = 'ThIs is an input test. With two sentences'
    const expectedResult = parseFloat((5 / 8).toFixed(2));

    expect(overallScore(testInput)).toEqual(expectedResult);
  })
});

describe('sentenceScore should ', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  test('return the density correctly for one sentence', () => {
    const testInput = 'This is an input test.'
    const scoreArray = sentenceScore(testInput)
    const expectedResult = parseFloat((3 / 5).toFixed(2));

    expect(Array.isArray(scoreArray)).toBe(true);
    expect(scoreArray).toHaveLength(1)
    expect(scoreArray[0]).toBe(expectedResult)
  })

  test('return the density correctly for one sentence', () => {
    const testInput = 'ThIs is input test. and another sentence with a with'
    const expectedFirstElement = parseFloat((3 / 4).toFixed(2));
    const expecteSecondElement = parseFloat((4 / 6).toFixed(2));
    const scoreArray = sentenceScore(testInput)

    expect(Array.isArray(scoreArray)).toBe(true);
    expect(scoreArray).toHaveLength(2)
    expect(scoreArray[0]).toBe(expectedFirstElement)  
    expect(scoreArray[1]).toBe(expecteSecondElement)  
  })
});