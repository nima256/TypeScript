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