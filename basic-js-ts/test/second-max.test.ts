import secondMax from '../src/second-max'

it('[4123] should returns 4123', () => {
  expect(secondMax([4123])).toBe(4123)
})

it('should throw error when input array is empty', () => {
  expect(() => secondMax([])).toThrow()
})

it('[2, 3, 4, 5] should returns 4', () => {
  expect(secondMax([2, 3, 4, 5])).toBe(4)
})

it('duplicate number like [9, 2, 21, 21] should returns 9', () => {
  expect(secondMax([9, 2, 21, 21])).toBe(9)
})

it('all same number like [4, 4, 4, 4] should returns 4', () => {
  expect(secondMax([4, 4, 4, 4])).toBe(4)
})
