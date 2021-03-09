module.exports = function check(str, bracketsConfig) {
  let array = bracketsConfig.map((item) => item.join(''))

  for(let i = 0; i < array.length; i++){

    if (str.includes(array[i])) {
      str = str.replace(array[i], '')
      i = -1
    }
  }
  if (str == ''){
  	return true
  } else{
  	return false
  }
}
