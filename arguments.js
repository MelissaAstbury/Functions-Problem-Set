// Is Even
//return if even
//return false otherwise

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isEven(num) {
  return num % 2 === 0;
}

//Using Factorial

function Factorial(num) {
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  //return the result variable
  return result;
}

//kebabToSnake
//replace all '-' with "_"
//return str

function kebabToSnake(str) {
  return str.replace(/-/g, "_");
}

// console.log(kebabToSnake("hello-to-goodbye"));

// Function which expects a number and a string
// Returns true if number is > 9 and string length =< 3

function numberWithString(str, num) {
  let andy = "wandy";
  console.log(andy);
  if (num > 9 && str.length <= 3) {
    return true;
  } else if (num === 2) {
    return "mangos";
  } else {
    return false;
  }
}

//console.log(numberWithString("three", 3));

function singSong() {
  console.log("blah blah black sheep");
  console.log("have you any wool");
}

singSongTwo = () => {
  console.log("blah blah black sheep");
  console.log("have you any wool");
};

singSongTwo();

//setInterval(singSong, 1500);

// setInterval(function() {
//   console.log("blah blah black sheep");
//   console.log("have you any wool");
// }, 2000);

// setInterval(() => {
//   console.log("blah blah black sheep");
//   console.log("have you any wool");
// });
