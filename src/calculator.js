
function IsNegative(number){ //Helper function to check for negative numbers.
  if(number < 0){
    return true;
  }
  return false;
}

function TooBig(number){ //Helper function that checks size of number.
  if(number < 1000){
    return true;
  }
  return false;
}

function CheckForNegativeVal(numbers){ //Function checks for negative numbers and throws an error with the nubers if found.
  var number = parseInt(numbers);
  if(typeof numbers == "string" && number < 0){
    throw new Error("String cannot contain negative values, " + number);
  }
  else if(Array.isArray(numbers) && numbers.some(IsNegative)){
    var errorString = ""; //Holds the negative numbers.
    for(var i = 0; i < numbers.length; i++){ //Checks all numbers.
      if(numbers[i] < 0){
        errorString += ", " + numbers[i];
      }
    }
    throw new Error("String cannot contain negative values" + errorString);
  }
}

function CheckForBigNumbers(numbers){
  var number = parseInt(numbers);
  if(typeof numbers == "string" && number > 1000){
    return 0;
  }
  else if(Array.isArray(numbers) && numbers.some(TooBig)){ //Check if number is over 1000.
    for(var i = 0; i < numbers.length; i++){
      if(numbers[i] > 1000){
        numbers[i] = 0; //Replace all n > 1000 with 0 since it doesn't affect calculations.
      }
    }
  }
  return numbers;
}

function Add(numbers) {
  var results = 0;
  if(numbers == "") {
    return results;
  }

  else if(numbers.includes(",") && numbers.includes("\n")){ //Commas and newlines.
    var regex = /[\n]/g; //Regex for any number newlines.
    var fixedString = numbers.replace(regex, ",") //Replace all newlines with commas.
    var numbersArr = fixedString.split(/[,]/); //Now we can split like we used to.
    CheckForNegativeVal(numbersArr);
    numbersArr = CheckForBigNumbers(numbersArr);
    for(var i = 0; i < numbersArr.length; i++){
      results += parseInt(numbersArr[i]);
    }
    return results;
  }

  else if(numbers.includes(",")){
    var numbersArr = numbers.split(/[,]/);
    CheckForNegativeVal(numbersArr);
    numbersArr = CheckForBigNumbers(numbersArr);
    for(var i = 0; i < numbersArr.length; i++){
      results += parseInt(numbersArr[i]);
    }
    return results;
  }

  else if(numbers.includes("\n")) {
    var numbersArr = numbers.split(/[\n]/);
    CheckForNegativeVal(numbersArr);
    numbersArr = CheckForBigNumbers(numbersArr);
    for(var i = 0; i < numbersArr.length; i++){
      results += parseInt(numbersArr[i]);
    }
    return results;
  }

  else{
    CheckForNegativeVal(numbers);
    numbers = CheckForBigNumbers(numbers);
    return parseInt(numbers);
  }
}
module.exports = Add;
