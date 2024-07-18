const code = 'pet_2015 Forrest'

const first_part = code.slice(0, 4)
const second_part = code.slice(4, 8)
const last_part = code.slice(8, code.length)

const checkAllString = (word) => {
  const arrOfStr = word.split('')
  for (let i = 0; i < arrOfStr.length; i++) {
    // 'a'.charCodeAt(0); 96 > a < 123
    if (isNaN(Number(arrOfStr[i]))) { // 0
      return true
    }
    return false
  }
}

console.log(first_part + ' ' + (second_part.trim('').length != 4) + ' ' + second_part.trim('') + ' ' + (isNaN(Number(second_part.trim('')))) +   ' ' + last_part  + ' ' + !checkAllString(last_part) + ' ' + !(last_part.length == (last_part.trim('').length)))

const validateCheck = () => {
  if (first_part !== "pet_") {
    return false
  }
  if ((isNaN(Number(second_part.trim('')))) || (second_part.trim('').length != 4)) {
    return false
  }
  if (!checkAllString(last_part) && !(last_part.length == (last_part.trim('').length))) {
    return false
  }
  return true
}

console.log('Result: ', validateCheck())