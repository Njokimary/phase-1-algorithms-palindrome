function isPalindrome(word) {
  // Write your algorithm here

}
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Compare characters from the beginning and end of the string
  for (let i = 0; i < alphanumericStr.length / 2; i++) {
    if (alphanumericStr[i] !== alphanumericStr[alphanumericStr.length - 1 - i]) {
      return false;
    }
  }
  
  return true;
}
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
