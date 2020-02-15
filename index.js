function scuberGreetingForFeet(value){
  if (value <= 400){
    return 'This one is on me!'
  }
  else if (value > 2500){
    return 'No can do.'
  }
  else if (value > 2000){
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city){
  let response; 
  city === "NYC" ? (response = "Ok, sounds good.") : (response = "No go.")
  return response;
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous': 
      return "Thank you so much."
      break; 
      case 'not as generous':
      return "Thank you."
      break; 
    default: 
      return "Bye."
      break;
  }

}