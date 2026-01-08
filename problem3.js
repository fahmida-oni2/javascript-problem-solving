// Problem 3: Check for Palindrome
const input = "madam"
function checkPalindrome (str){
    res=[...str].reverse().join("")
    console.log(res)
   return str === res ? "A palindrome" : "not a palindrome"
}
console.log(checkPalindrome(input))