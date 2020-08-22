/**
 * 13桁のJANコードにおけるチェックデジットを前の12桁から求める
 * refs: https://www.dsri.jp/jan/check_digit.html
 * 
 * @param codeWithoutDigit - 12桁の数字の文字列
 * @returns 12桁の数字から求めたチェックデジット
 */
export const calcJanCodeCheckDigit = (codeWithoutDigit: string): string | Error => {
  // 引数の値をチェックする
  if (Number(codeWithoutDigit) === NaN) {
    return new Error('Contains a non-numeric string.');
  }

  if (codeWithoutDigit.length !== 12) {
    return new Error('Number is not 12 digits');
  }

  // JANコード上で偶数桁の数字を加算したものと、奇数桁の数字を加算したものを求める
  const codeWithoutDigitArray = codeWithoutDigit.split("").map(Number);
  let sumOddDigitArray: number = 0
  let sumEvenDigitArray: number = 0;
  codeWithoutDigitArray.forEach((number, index) => {
    if ((index + 1) % 2 === 1) {
      sumEvenDigitArray += number;
    } else {
      sumOddDigitArray += number;
    }
  });

  // 奇数桁の数字を加算したものを3倍する
  const tripledOddDigitSum = sumOddDigitArray * 3;

  // 偶数桁の数値を加算したものを加算する
  const includeCheckDigitValue = sumEvenDigitArray + tripledOddDigitSum;

  // 下一桁を10から減算したものがチェックデジット
  return (10 - includeCheckDigitValue % 10).toString();
}

/**
 * 12桁の数値文字列からチェックデジットを取得する
 * 
 * @param codeWithoutDigit - 12桁の数字の文字列
 * @returns 12桁の数字から求めたチェックデジット
 */
export const getCheckDigit = (codeWithoutDigit: string): string | Error => {
  return calcJanCodeCheckDigit(codeWithoutDigit);
}

/**
 * 12桁の数値文字列にチェックデジットを付与する
 * 
 * @param codeWithoutDigit - 12桁の数字の文字列
 * @returns 12桁の数字から求めたチェックデジットを付与した13桁のJANコード 
 */
export const addCheckDigit = (codeWithoutDigit: string): string | Error => {
  const checkDigit = calcJanCodeCheckDigit(codeWithoutDigit);
  if (checkDigit instanceof Error) { return checkDigit; };
  return codeWithoutDigit + checkDigit;
}