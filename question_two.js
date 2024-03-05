//Write a javascript function to square numbers
//- For loop 1 to 10
//- Pass each number as argument to square
//- Return value of argument multiplied by itself
//- Display result like this
//Square numbers from 1 to 10
//The square of 1 is 1  

  function squareNumbers() {
    let result = "Square numbers from 1 to 10:\n";
    // x++ means increament so in this case numbers are increasing from 1 to 10
    for (let x = 1; x <= 10; x++) {
      const squared = square(x);
      result += "The square of " + x + " is " + squared + '\n'; //The \n takes you to the next line    
    } // this is the same as result = result + "The square of " + x + " is " + squared + '\n'; meaning concatenation
    
    console.log(result);
  }
  
  function square(number) {
    return number * number;
  }
  //calling the function
  squareNumbers();
  












