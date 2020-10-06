const secondMax = (arr: number[]) => {
  if (arr.length === 0) {
    throw new Error('Input array should not be empty.')
  }

  const uniqueNumbers = [...new Set(arr)]
  if (uniqueNumbers.length === 1) {
    return uniqueNumbers[0]
  }

  uniqueNumbers.sort((a, b) => b - a)
  return uniqueNumbers[1]
}

export default secondMax
