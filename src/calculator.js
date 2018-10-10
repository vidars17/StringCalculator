
function IsNegative(number){ //Helper function to check for negative numbers.
  if(number < 0){
    return true;
  }
  return false;
}

function TooBig(number){
  if(number < 1000){
    return true;
  }
  return false;
}

function CheckForNegativeVal(numbers){
  var number = parseInt(numbers);
  if(typeof numbers == "string" && number < 0){
    throw new Error("String cannot contain negative values, " + number);
  }
  else if(Array.isArray(numbers) && numbers.some(IsNegative)){
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
    if(numbersArr.some(TooBig)){
      for(var i = 0; i < numbersArr.length; i++){
        if(numbersArr[i] > 1000){
          numbersArr[i] = 0;
        }
      }
    }
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
    CheckForNegativeVal(numbers);
    return parseInt(numbers);
  }
}
module.exports = Add;
