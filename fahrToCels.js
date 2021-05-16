//Defining a function that takes a single parameter
// and converts from Fahrenheit to Celsius

function convertFahrToCelsius(temp) {
    if ((typeof temp === 'number') || (typeof temp === "string" && typeof parseInt(temp) === "number")){
        // degCel is the variable representing the temperature in degree celsius
        let degCel = ((temp - 32) * 5) / 9
        return degCel.toFixed(4)
    }
    else {
        return `${temp} is not a valid number, but a/an ${typeof(temp)}`
    }
}

let value = prompt("Enter a value: ")
console.log(convertFahrToCelsius(value))