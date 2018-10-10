
function IsNegative(number){ //Helper function to check for negative numbers.
  if(number < 0){
    return true;
  }
  return false;
}


function CheckForNegativeVal(numbers){
  if(numbers.some(IsNegative)){
    var errorString = "";
    for(var i = 0; i < numbers.length; i++){
      if(numbers[i] < 0){
        errorString += ", " + numbers[i];
      }
    }
    throw new Error("String cannot contain negative values" + errorString);
  }
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
    CheckForNegativeVal(numbersArr);
    for(var i = 0; i < numbersArr.length; i++){
      results += parseInt(numbersArr[i]);
    }
    return results;
  }

  else if(numbers.includes(",")){
    var numbersArr = numbers.split(/[,]/);
    CheckForNegativeVal(numbersArr);
    for(var i = 0; i < numbersArr.length; i++){
      results += parseInt(numbersArr[i]);
    }
    return results;
  }

  else if(numbers.includes("\n")) {
    var numbersArr = numbers.split(/[\n]/);
    CheckForNegativeVal(numbersArr);
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
