function Add(numbers) {
  if(numbers == "") {
    return 0;
  }

  if(numbers.includes(",")){
    var numbersArr = numbers.split(",");
    var results = 0;
    for(var i = 0; i < numbersArr.length; i++){
      results += parseInt(numbersArr[i]);
    }
    return results;
  }

  return parseInt(numbers);
}
module.exports = Add;
