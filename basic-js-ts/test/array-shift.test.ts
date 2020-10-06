import shift from '../src/array-shift'

it('shift left 2', () => {
  const expected = ['sarah', 'alex', 'john', 'jane']

  const actual = shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)

  expect(actual).toEqual(expected)
})

it('shift left equal to array length', () => {
  const expected = ['john', 'jane', 'sarah', 'alex']

  const actual = shift(['john', 'jane', 'sarah', 'alex'], 'left', 4)

  expect(actual).toEqual(expected)
})

it('shift right 3', () => {
  const expected = [3, 4, 5, 1, 2]

  const actual = shift([1, 2, 3, 4, 5], 'right', 3)

  expect(actual).toEqual(expected)
})

it('shift right equal to array length', () => {
  const expected = [1, 2, 3, 4, 5]

  const actual = shift([1, 2, 3, 4, 5], 'right', 5)

  expect(actual).toEqual(expected)
})
