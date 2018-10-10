
function IsNegative(number){ //Helper function to check for negative numbers.
  if(number < 0){
    return true;
  }
  return false;
}


function Add(numbers) {
  var results = 0;
  if(numbers == "") {
    return results;
  }

  else if(numbers.includes(",") && numbers.includes("\n")){
    var regex = /[\n]/g;
    var fixedString = numbers.replace(regex, ",")
    var numbersArr = fixedString.split(/[,]/);
    if(numbersArr.some(IsNegative)){
      var errorString = "";
      for(var i = 0; i < numbersArr.length; i++){
        if(numbersArr[i] < 0){
          errorString += ", " + numbersArr[i];
        }
      }
      throw new Error("String cannot contain negative values" + errorString);
    }
    for(var i = 0; i < numbersArr.length; i++){
      results += parseInt(numbersArr[i]);
    }
    return results;
  }

  else if(numbers.includes(",")){
    var numbersArr = numbers.split(/[,]/);
    for(var i = 0; i < numbersArr.length; i++){
      results += parseInt(numbersArr[i]);
    }
    return results;
  }

  else if(numbers.includes("\n")) {
    var numbersArr = numbers.split(/[\n]/);
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
