for (let i: number = 1; i <= 100; i++) {
  let output: string = ''
  if (i % 3 === 0) output += 'Fizz'
  if (i % 5 === 0) output += 'Buzz'
  console.log(output || i)
}
