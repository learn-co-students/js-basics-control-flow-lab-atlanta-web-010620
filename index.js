function scuberGreetingForFeet(distance){
  // Write your code here!
  let result;
  if (distance <= 400) {
    result = "This one is on me!"
  } else if (distance > 2000 && distance <= 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else if (distance > 2500) {
    result = "No can do."
  }
  return result
}

function ternaryCheckCity(city){
  // Write your code here!
  let result;
  city === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.")
  return result
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}