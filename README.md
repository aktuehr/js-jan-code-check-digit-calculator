# js-jan-code-check-digit-calculator
Calculator of JAN Check-digit for TypeScript.

## Usage
```typescript
import { getCheckDigit, addCheckDigit } from 'js-jan-code-check-digit-calculator';

const number = '456995111617'; // string
const digit = getCheckDigit(number);
console.log(digit); // 9

const janCode = addCheckDigit(number);
console.log(janCode) // 4569951116179
```