function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied";
console.log(answer);

var automatedAnswer =
  "Your account # is " + (isUserValid(false) ? "1234" : "not available");
console.log(automatedAnswer);

// switch statement
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right ":
      whatHappens = "you found a river";
      break;
    case "left":
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

console.log(moveCommand("back"));
