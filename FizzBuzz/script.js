const code = []
for (let i = 1; i <= 20; i++){
  if (i % 15 === 0) {
    code.push('FizzBuzz')
  }
  else if (i % 3 === 0){
    code.push('Fizz')
  }
  else if (i % 5 === 0){
    code.push('Buzz')
  }
  else{
    code.push(i)
  }
}
console.log(code)