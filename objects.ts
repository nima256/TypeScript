// First we use object in an input of a function 
function printname(name: { first: string, last: string }): void {
    console.log(`Your first name is ${name.first} and your lastname is ${name.last}`);
};
/* For calling it first we have to open curly braces and then we type the name of the key 
   and in front of it we type the value that we want and we add comma and enter rest of the keys */
printname({ first: "Nick", last: "djasklf" });

// We can also have object in variables
let nums: { x: number, y: number } = { x: 45, y: 74 };

// We can also have it as output of a function 
function randomNum(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() };
};