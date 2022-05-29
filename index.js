function isPalindrome(word) {
  let split = word.split("")
  let reverseArray = split.reverse();
  let drow = reverseArray.join("");
  //function here to reverse word
  if (word === drow) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here

  have a function with a string input()
    take that string output and reverse it
    if the reverse is the same as forward, return true
    else if the reverse is not the same, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
