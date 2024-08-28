// Iteration 1: Names and Input
 /*1.1 Crear una variable hacker1 con el nombre del conductor.*/

let hacker1= "Samuel"

console.log(`The driver's name is ${hacker1}`)

let hacker2="Angela"
let hacker3="Sofiab"

console.log(`The navigator's name is ${hacker2} y ${hacker3}`)

// Iteration 2: Conditionals

if ((hacker1.length>hacker2.length) && (hacker1.length>hacker3.length)){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)

}
else if ((hacker2.length > hacker1.length) && (hacker2.length>hacker3.length)){
    console.log (`It seems that the navigator one has the longest name, it has ${hacker2.length} characters.`)

}
else if ((hacker3.length > hacker1.length) && (hacker3.length>hacker2.length)){

    console.log (`It seems that the navigator two has the longest name, it has ${hacker3.length} characters.`)

}
else if ((hacker1.length===hacker2.length)&& (hacker1.length===hacker3.length)){
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops
