import {
  comparationCall,
  ComparationCallProps,
  ComparationCallReturn,
} from '../utils/comparationCall';

const MOCK_DATA = [
  { id: 1, origin: '011', destiny: '016', price: 1.9 },
  { id: 2, origin: '016', destiny: '011', price: 2.9 },
  { id: 3, origin: '011', destiny: '017', price: 1.7 },
  { id: 4, origin: '017', destiny: '011', price: 2.7 },
  { id: 5, origin: '011', destiny: '018', price: 0.9 },
  { id: 6, origin: '018', destiny: '011', price: 1.9 },
];

describe('Comparation Call', () => {
  test('should return prices for plan 30', () => {
    const comparationCallProps: ComparationCallProps = {
      origin: '011',
      destiny: '016',
      plan: 30,
      duration: 20,
      prices: MOCK_DATA,
    };
    const resultExpect: ComparationCallReturn = {
      error: false,
      data: {
        promotionPrice: 0,
        realPrice: 38,
      },
    };
    const result: ComparationCallReturn = comparationCall(comparationCallProps);
    expect(resultExpect).toEqual(result)
  });
  test('should return prices for plan 60', () => {
    const comparationCallProps: ComparationCallProps = {
      origin: '011',
      destiny: '017',
      plan: 60,
      duration: 80,
      prices: MOCK_DATA,
    };
    const resultExpect: ComparationCallReturn = {
      error: false,
      data: {
        promotionPrice: 37.40,
        realPrice: 136,
      },
    };
    const result: ComparationCallReturn = comparationCall(comparationCallProps);
    expect(resultExpect).toEqual(result)
  });
  test('should return prices for plan 120', () => {
    const comparationCallProps: ComparationCallProps = {
      origin: '018',
      destiny: '011',
      plan: 120,
      duration: 200,
      prices: MOCK_DATA,
    };
    const resultExpect: ComparationCallReturn = {
      error: false,
      data: {
        promotionPrice: 167.20,
        realPrice: 380,
      },
    };
    const result: ComparationCallReturn = comparationCall(comparationCallProps);
    expect(resultExpect).toEqual(result)
  });
  test('should return error for link between non-existent ddd', () => {
    const comparationCallProps: ComparationCallProps = {
      origin: '018',
      destiny: '017',
      plan: 30,
      duration: 100,
      prices: MOCK_DATA,
    };
    const resultExpect: ComparationCallReturn = {
      error: true,
      data: {
        promotionPrice: 0,
        realPrice: 0,
      },
    };
    const result: ComparationCallReturn = comparationCall(comparationCallProps);
    expect(resultExpect).toEqual(result)
  });
  test('should return error when there is no parameter', () => {
    const comparationCallProps: ComparationCallProps = {
      origin: '',
      destiny: '',
      plan: 0,
      duration: 0,
      prices: [],
    };
    const resultExpect: ComparationCallReturn = {
      error: true,
      data: {
        promotionPrice: 0,
        realPrice: 0,
      },
    };
    const result: ComparationCallReturn = comparationCall(comparationCallProps);
    expect(resultExpect).toEqual(result)
  });
});
