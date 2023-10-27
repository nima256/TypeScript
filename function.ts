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
        console.log(name, age, isOld);
};

// here we call it and enter the input and if we add more input or less input it would get us error
ARROWFUNC("hey", 45, true);