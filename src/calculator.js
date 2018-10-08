function Add(numbers) {
  if(numbers == "") {
    return 0;
  }

  else if(numbers.includes(",")){
    var numbersArr = numbers.split(",");
    var results = 0;
    for(var i = 0; i < numbersArr.length; i++){
      results += parseInt(numbersArr[i]);
    }
    return results;
  }

  else{
    return parseInt(numbers);
  }
}
module.exports = Add;
