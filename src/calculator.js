function Add(numbers) {
  if(numbers == "") {
    return 0;
  }

  else if(numbers.includes(",") || numbers.includes("\n")){

    var results = 0;
    if(numbers.includes(",") && numbers.includes("\n")){
      var regex = /[\n]/g;
      var fixedString = numbers.replace(regex, ",")
      var numbersArr = fixedString.split(/[,]/);
      for(var i = 0; i < numbersArr.length; i++){
        results += parseInt(numbersArr[i]);
      }
    }
    else if(numbers.includes(",")){
      var numbersArr = numbers.split(/[,]/);
      for(var i = 0; i < numbersArr.length; i++){
        results += parseInt(numbersArr[i]);
      }
    }
    else if(numbers.includes("\n")) {
      var numbersArr = numbers.split(/[\n]/);
      for(var i = 0; i < numbersArr.length; i++){
        results += parseInt(numbersArr[i]);
      }
    }

    return results;
  }

  else{
    return parseInt(numbers);
  }
}
module.exports = Add;
