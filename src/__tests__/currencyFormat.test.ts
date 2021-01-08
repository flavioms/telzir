import {currencyBRL} from '../utils/currencyFormat';


describe('Currency Format', () => {
  test("should return string", () => {
    const result = currencyBRL(1);
    expect('string').toBe(typeof result)
  })

  test("should return currency symbol", () => {
    const result = currencyBRL(2);
    expect(true).toBe(result.includes("R$"))
  })

  test("should return decimal currency", () => {
    const result = currencyBRL(35.75);
    expect(result.replace(/\s/g, '')).toEqual('R$35.75')
  })

  test("should return hundred currency", () => {
    const result = currencyBRL(350.75);
    expect(result.replace(/\s/g, '')).toEqual('R$350.75')
  })

  test("should return thousand currency", () => {
    const result = currencyBRL(1350.75);
    expect(result.replace(/\s/g, '')).toEqual('R$1,350.75')
  })

  test("should return million currency", () => {
    const result = currencyBRL(1111350.75);
    expect(result.replace(/\s/g, '')).toEqual('R$1,111,350.75')
  })

})
