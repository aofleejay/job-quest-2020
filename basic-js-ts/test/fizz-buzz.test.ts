import fizzBuzz from '../src/fizz-buzz'

it('21 should returns Fizz', () => {
  expect(fizzBuzz(21)).toBe('Fizz')
})

it('10 should returns Buzz', () => {
  expect(fizzBuzz(10)).toBe('Buzz')
})

it('45 should returns FizzBuzz', () => {
  expect(fizzBuzz(45)).toBe('FizzBuzz')
})
