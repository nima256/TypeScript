/* This is how we create a function just like js
but here the type of input that we get from user by defualt is any
*/

function square(num) {
        return num * num;
}

// This is correct usage 
square(3);

// But if i pass string in it it won't care 
square("string");

// or if i pass boolean
square(true);

// So we have to do this:
function circle(num: number) {
        return num * num;
}

// Now if i pass string or boolean it will give me an error
// circle("string");
// circle(false);

// now if i pass number it will work
circle(5);


/* Here an arrow function and also we can add more that on input for a function with adding comma 
   after type of that input */
const ARROWFUNC = (name: string, age: number, isOld: boolean) => {
        return [name, age, isOld];
};

// here we call it and enter the input and if we add more input or less input it would get us error
ARROWFUNC("hey", 45, true);


// We add a default value for the function that if user doesn't enter input the function has a default value
function greet(name: string = "Unknown") {
        return `Hi , ${name}`;
};


/* Here in function we can add a type for the return value of the function we can add it if we want
   it is not useful in short function and TypeScript is smart if you write sth in your function 
   that it returns a number function will get that the output is number but in large function 
   if you say the return must be string and in that you make a mistake and return a number 
   it would tell you that the return value is number not string */
function greet2(name: string = "Unknown"): string {
        return `Hi Dear ${name}`;
};

/* Here another example that if you hover on the name of the fucntion you see that TypeScript says
   the output is string or number */
function randomNumber(num: number) {
        if (Math.random() > 0.5) {
                return num.toString();
        }
        return num;
};


/* Here if we have a list of numbers and we want to map over them we have to write a function 
   and we don't need to specify the type of the input funciton TypeScript is smart and can undrestand
   that the list of number are numbers and the output should be number so it knows it */
const numbers = [5, 4, 8];
numbers.map(num => {
        return num.toString();
})


// The void type is nothing and if the function is going to return anything you can add void to type
// If you don't return anything the default type is void
function returnNothing(age: number): void {
        console.log(age);
        console.log(age)
};