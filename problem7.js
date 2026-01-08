// Problem 7: Find Even Numbers in an Array
const input =[1, 2, 3, 4, 5, 6]
let res=[]
for(const num of input){
     num % 2 ===0 ? res.push(num) : "not an even number"
}

console.log(res)