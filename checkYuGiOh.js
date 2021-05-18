 // Defining a function that takes a number, num as argument
 // It creates an array of numbers from 1 to num and carries
 // out certain conditions within the function.

 function checkYuGiOh(num) {
     let arr = []
     if (typeof (num) != "number") {
         return `Invalid parameter: ${num}`
     } else {
         for (let i = 1; i <= num; i++) {
             arr.push(i)
         }
     }

     //the loop conditions to be executed: 
     // replace multiples of 2 with "yu", multiples of 3 with "gi"
     // multiples of 5 with "oh", multiples of 2 and 3 with "yu-gi",
     // multiples of 2 and 5 with "yu-oh", 3 and 5 with "gi-oh" 
     // and finally 2, 3 and 5 with "yu-gi-oh"
     for (let index = 0; index < arr.length; index++) {
         if ((arr[index] % 2 == 0) && (arr[index] % 3 == 0) && (arr[index] % 5 == 0)) {
             arr[index] = "yu-gi-oh"
         } else if ((arr[index] % 2 == 0) && (arr[index] % 3 == 0)) {
             arr[index] = "yu-gi"
         } else if ((arr[index] % 2 == 0) && (arr[index] % 5 == 0)) {
             arr[index] = "yu-oh"
         } else if ((arr[index] % 3 == 0) && (arr[index] % 5 == 0)) {
             arr[index] = "gi-oh"
         } else if (arr[index] % 2 == 0) {
             arr[index] = "yu"
         } else if (arr[index] % 3 == 0) {
             arr[index] = "gi"
         } else if (arr[index] % 5 == 0) {
             arr[index] = "oh"
         }
     }
     return arr
 }

 let value = prompt("Enter a value for num: ") 
 console.log(checkYuGiOh(value))