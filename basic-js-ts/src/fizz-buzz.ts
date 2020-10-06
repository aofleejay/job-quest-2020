const isFizz = (operand: number) => operand % 3 === 0 && 'Fizz'
const isBuzz = (operand: number) => operand % 5 === 0 && 'Buzz'

const fizzBuzz = (target: number) =>
  [isFizz(target), isBuzz(target)]
    .filter((value): value is 'Fizz' | 'Buzz' => !!value)
    .reduce((result, term) => result + term, '') || target

export default fizzBuzz
