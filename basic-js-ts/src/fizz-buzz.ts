const canMod3 = (operand: number) => operand % 3 === 0
const canMod5 = (operand: number) => operand % 5 === 0

const isFizz = (input: number) => canMod3(input) && 'Fizz'
const isBuzz = (input: number) => canMod5(input) && 'Buzz'

const fizzBuzz = (target: number) =>
  [isFizz, isBuzz]
    .filter((func) => func(target))
    .reduce((result, func) => result + func(target), '')

export default fizzBuzz
