
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
  var newDelimiter;
  if(numbers.includes("//")){ //Checks for slashes denoting new delimiter.
    newDelimiter = numbers[2]; //Takes new delimiter.
    var regex = new RegExp(newDelimiter, 'g'); //Creates new regular expression with the delimiter.
    numbers = numbers.replace(regex, ","); //Replaces delimitor with commas that we know how to deal with.
    numbers = numbers.replace("//", "0"); //Replaces indicators with 0 so the don't cause problems.
  }
  if(numbers.includes("\n")){
    var newline = "\n"
    var regex = new RegExp(newline, 'g'); //Regex for any number newlines.
    numbers = numbers.replace(regex, ",") //Replace all newlines with commas.
  }
  if(numbers == "") {
    return results;
  }
  /*
  else if(numbers.includes(",") && numbers.includes("\n")){ //Commas and newlines.

    var numbersArr = fixedString.split(/[,]/); //Now we can split like we used to.
    CheckForNegativeVal(numbersArr);
    numbersArr = CheckForBigNumbers(numbersArr);
    for(var i = 0; i < numbersArr.length; i++){
      results += parseInt(numbersArr[i]);
    }
    return results;
  }
*/
  else if(numbers.includes(",")){ //As an afterthought after completing the assignment this could've been the only function splitting if I'd have used replace() like in the first if statement.
    var numbersArr = numbers.split(/[,]/);
    CheckForNegativeVal(numbersArr);
    numbersArr = CheckForBigNumbers(numbersArr);
    for(var i = 0; i < numbersArr.length; i++){
      results += parseInt(numbersArr[i]);
    }
    return results;
  }
/*
  else if(numbers.includes("\n")) {
    var numbersArr = numbers.split(/[\n]/);
    CheckForNegativeVal(numbersArr);
    numbersArr = CheckForBigNumbers(numbersArr);
    for(var i = 0; i < numbersArr.length; i++){
      results += parseInt(numbersArr[i]);
    }
    return results;
  }
*/
  else{
    CheckForNegativeVal(numbers);
    numbers = CheckForBigNumbers(numbers);
    return parseInt(numbers);
  }
}
module.exports = Add;
