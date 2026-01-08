// Problem 2: Count Vowels in a String

const input= "programming"
const vowel='aeiou'
const vowelFound =[]
for (str of input){
    if(vowel.includes(str.toLowerCase())){
            console.log(str)
        vowelFound.push(str)
    }    
}
console.log("Total vowels found:", vowelFound.length)
console.log("The vowels are:", vowelFound)