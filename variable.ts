// let myVar : type = value;

let str : string = "It's first string";
str = "It's another string";
/* 
str = 12;
this is false and typescript is going to underline the "str" with red color 
and if you hover you see that it tells you your variable type is string you are writing number
but js doesn't told you this until u run it
even you can not set it to boolean
str = true;
*/ 

let num : number = 12;
num = 45;
// num = "it is false too"
// num = false;

let bool : boolean = true;
bool = false;
// bool = "it is false"
// bool = 0


// you can also ignore writing the type of the variable typescript is smart 
let boolWithoutSpecifyType = true;
let numWithoutSpecifyType = 15;
let strWithoutSpecifyType = "I am string";

/* Also we have type any that typescript doesn't care what r u doing with your variable
if you set a type of a variable to any if you wirte number for it and in the next line you call it 
again and type string or in another line write boolean typescript doesn't care anymore if you want 
typescript attention don't set variable to any */
let typeScriptDoesNotCareAboutMe: any;
typeScriptDoesNotCareAboutMe = 2;
typeScriptDoesNotCareAboutMe = "djas;klfjasf"
typeScriptDoesNotCareAboutMe = true;
// it doesn't give me any error just like it's type that it's name is any