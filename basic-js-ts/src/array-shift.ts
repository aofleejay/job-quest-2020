const shift = <T>(
  arr: T[],
  direction: 'left' | 'right',
  amount: number,
): T[] => {
  const shiftAmount = amount % arr.length

  if (direction === 'left') {
    const tail = arr.splice(0, shiftAmount)
    return [...arr, ...tail]
  } else {
    const head = arr.splice(-shiftAmount)
    return [...head, ...arr]
  }
}

export default shift
