var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      --count;
      break;
   case 7:
   case 8:
   case 9:
     count = count + 0;
     break;
    default:
      ++count;
  }
  if(count <=0){
    return count + " Hold";
  }
    return count + " Bet";
  // Only change code above this line
}
// Add/remove calls to test your function.
// Note: Only the last will display
cc(3); cc(2); cc('A'); cc(10); cc('K');
