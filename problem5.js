// Problem 5: Remove Duplicates from an Array

const input =[1, 2, 2, 3, 4, 4]
const notDuplicate=[]
for (const num of input) {
    if(!notDuplicate.includes(num)){
       notDuplicate.push(num)
    }
}

console.log(notDuplicate)