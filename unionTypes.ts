// now we can say variables can be string or number

let twoSide: string | number = 55;

twoSide = "asjd;flka";
twoSide = 222;
// both are possible


function calculateTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
};


// we want a list that contain number and string in it
const numAndStr : (number | string)[] = [56 , "jadsk;lf" , 45]

// literal types 
let zero : 0 = 0;
// zero = 2; Error
let hi : "hi" = "hi";
// hi = "HI" Error

let mood : "happy" | "sad" = "happy";
mood = "sad";
// mood = "angry" Error

type dayOfWeek = "Monday" | "Tuesday" | "Wednesday"

let day : dayOfWeek = "Tuesday";
// day = "Thursday" Error