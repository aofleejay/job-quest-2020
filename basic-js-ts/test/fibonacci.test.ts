import fib from '../src/fibonacci'

it('fib(1) should returns 1', () => {
  expect(fib(1)).toBe(1)
})

it('fib(2) should returns 1', () => {
  expect(fib(2)).toBe(1)
})

it('fib(3) should returns 2', () => {
  expect(fib(3)).toBe(2)
})

it('fib(12) should returns 144', () => {
  expect(fib(12)).toBe(144)
})
