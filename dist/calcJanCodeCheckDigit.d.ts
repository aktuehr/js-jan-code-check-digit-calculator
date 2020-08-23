/**
 * 13桁のJANコードにおけるチェックデジットを前の12桁から求める
 * refs: https://www.dsri.jp/jan/check_digit.html
 *
 * @param codeWithoutDigit - 12桁の数字の文字列
 * @returns 12桁の数字から求めたチェックデジット
 */
export declare const calcJanCodeCheckDigit: (codeWithoutDigit: string) => string;
/**
 * 12桁の数値文字列からチェックデジットを取得する
 *
 * @param codeWithoutDigit - 12桁の数字の文字列
 * @returns 12桁の数字から求めたチェックデジット
 */
export declare const getCheckDigit: (codeWithoutDigit: string) => string;
/**
 * 12桁の数値文字列にチェックデジットを付与する
 *
 * @param codeWithoutDigit - 12桁の数字の文字列
 * @returns 12桁の数字から求めたチェックデジットを付与した13桁のJANコード
 */
export declare const addCheckDigit: (codeWithoutDigit: string) => string;
