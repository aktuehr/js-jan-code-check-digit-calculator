import { calcJanCodeCheckDigit, getCheckDigit } from './calcJanCodeCheckDigit';

describe('calcJanCodeCheckDigit', () => {
  describe('引数に数値以外の文字を含めるとエラーになる', () => {
    const errorCodes = [
      '123456789a01',
      'A12345678901',
      '12345678901あ',
      'abcdefghijkl'
    ];
    for (const code of errorCodes) {
      test(code, () => {
        expect(() => calcJanCodeCheckDigit(code)).toThrow();
      })
    }
  })

  describe('引数に12桁以外の数値を与えるとエラーになる', () => {
    const errorCodes = [
      '1',
      '12345678901',
      '1234567890123'
    ];
    for (const code of errorCodes) {
      test(code, () => {
        expect(() => calcJanCodeCheckDigit(code)).toThrow();
      })
    }
  })

  describe('12桁の数値を与えるとチェックデジットが取得できる', () => {
    const successCodeAndDigits = [
      ['456995111617', '9'],
      ['456995111025', '2'],
      ['491009971074', '1'],
      ['351386327796', '2'],
      ['497163300200', '5'],
    ];
    for (const code of successCodeAndDigits) {
      test(code[0], () => {
        expect(calcJanCodeCheckDigit(code[0])).toBe(code[1]);
      })
    }
  })
});

/** calcJanCodeCheckDigit と同じ結果になる */
describe('getCheckDigit', () => {
  describe('引数に数値以外の文字を含めるとエラーになる', () => {
    const errorCodes = [
      '123456789a01',
      'A12345678901',
      '12345678901あ',
      'abcdefghijkl'
    ];
    for (const code of errorCodes) {
      test(code, () => {
        expect(() => getCheckDigit(code)).toThrow();
      })
    }
  })

  describe('引数に12桁以外の数値を与えるとエラーになる', () => {
    const errorCodes = [
      '1',
      '12345678901',
      '1234567890123'
    ];
    for (const code of errorCodes) {
      test(code, () => {
        expect(() => getCheckDigit(code)).toThrow();
      })
    }
  })

  describe('12桁の数値を与えるとチェックデジットが取得できる', () => {
    const successCodeAndDigits = [
      ['456995111617', '9'],
      ['456995111025', '2'],
      ['491009971074', '1'],
      ['351386327796', '2'],
      ['497163300200', '5'],
    ];
    for (const code of successCodeAndDigits) {
      test(code[0], () => {
        expect(getCheckDigit(code[0])).toBe(code[1]);
      })
    }
  })
});
