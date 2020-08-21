/**
 * 13桁のJANコードにおけるチェックデジットを前の12桁から求める
 * refs: https://www.dsri.jp/jan/check_digit.html
 * 
 * @param codeWithoutDigit - 12桁の数字の文字列
 */
export const calcJanCodeCheckDigit = (codeWithoutDigit: string) => {
  // 0. 引数の値をチェックする

  // 1. 全ての偶数桁の数字を加算する

  // 2. 1.の結果を3倍する

  // 3. すべての奇数桁の数字を加算する

  // 4. 2.と3.の結果を加算する

  // 5. 4.の結果の下1桁の数字を、 `10` から引いたものがチェックデジット
}
