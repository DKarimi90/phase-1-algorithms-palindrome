function isPalindrome(word) {
  // Write your algorithm here
  // splitting the word using the inbuilt split function 
  // reversing the word and then joining using the reverse and split functions 
  const arrayOfLetters = word.split('')
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString  = reverseLetters.join('')


// Add your pseudocode here
  if (word == reverseString) {
    return true 
  }
  else {
    return false 
  }}

/*
Add written explanation of your solution here
  if (require.main === module) {
    console.log('Expecting: false)
    console.log('=>', isPalindrome('boy'));
  }
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

