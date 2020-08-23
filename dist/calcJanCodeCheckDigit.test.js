"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcJanCodeCheckDigit_1 = require("./calcJanCodeCheckDigit");
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
                expect(() => calcJanCodeCheckDigit_1.calcJanCodeCheckDigit(code)).toThrow();
            });
        }
    });
    describe('引数に12桁以外の数値を与えるとエラーになる', () => {
        const errorCodes = [
            '1',
            '12345678901',
            '1234567890123'
        ];
        for (const code of errorCodes) {
            test(code, () => {
                expect(() => calcJanCodeCheckDigit_1.calcJanCodeCheckDigit(code)).toThrow();
            });
        }
    });
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
                expect(calcJanCodeCheckDigit_1.calcJanCodeCheckDigit(code[0])).toBe(code[1]);
            });
        }
    });
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
                expect(() => calcJanCodeCheckDigit_1.getCheckDigit(code)).toThrow();
            });
        }
    });
    describe('引数に12桁以外の数値を与えるとエラーになる', () => {
        const errorCodes = [
            '1',
            '12345678901',
            '1234567890123'
        ];
        for (const code of errorCodes) {
            test(code, () => {
                expect(() => calcJanCodeCheckDigit_1.getCheckDigit(code)).toThrow();
            });
        }
    });
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
                expect(calcJanCodeCheckDigit_1.getCheckDigit(code[0])).toBe(code[1]);
            });
        }
    });
});
describe('addCheckDigit', () => {
    describe('引数に数値以外の文字を含めるとエラーになる', () => {
        const errorCodes = [
            '123456789a01',
            'A12345678901',
            '12345678901あ',
            'abcdefghijkl'
        ];
        for (const code of errorCodes) {
            test(code, () => {
                expect(() => calcJanCodeCheckDigit_1.addCheckDigit(code)).toThrow();
            });
        }
    });
    describe('引数に12桁以外の数値を与えるとエラーになる', () => {
        const errorCodes = [
            '1',
            '12345678901',
            '1234567890123'
        ];
        for (const code of errorCodes) {
            test(code, () => {
                expect(() => calcJanCodeCheckDigit_1.addCheckDigit(code)).toThrow();
            });
        }
    });
    describe('12桁の数値を与えるとチェックデジット付の13桁の数値が取得できる', () => {
        const successCodeAndDigits = [
            ['456995111617', '4569951116179'],
            ['456995111025', '4569951110252'],
            ['491009971074', '4910099710741'],
            ['351386327796', '3513863277962'],
            ['497163300200', '4971633002005'],
        ];
        for (const code of successCodeAndDigits) {
            test(code[0], () => {
                expect(calcJanCodeCheckDigit_1.addCheckDigit(code[0])).toBe(code[1]);
            });
        }
    });
});
