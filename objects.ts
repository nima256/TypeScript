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

/* at above i used "x : number , y : number" for two times maybe i want to use it morre and it 
   would be a lot of code in line so we can write Type Alias */

type numForAll = {
    x: number,
    y: number
};

// now here insted of that i can type the name of the Type Alias above
let nums2: numForAll = { x: 45, y: 74 };

// same thing for here 
function randomNum2(): numForAll {
    return { x: Math.random(), y: Math.random() };
};


// Here example nasted objects and also Alias 
type songObject = {
    title: string,
    artist: string,
    numStreams: number,
    credits: { producer: string, writer: string }
};

function calculatePayout(song: songObject): number {
    return song.numStreams * 0.0045
};

function printSong(song: songObject) {
    console.log(`${song.title} - ${song.artist}`);
}

const data: songObject = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 648689697,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};

const output = calculatePayout(data);
console.log(output);
printSong(data);


// How to make a type optional in Type Alias

type Point = {
    x: number,
    y: number,
    z?: number
}

const myPoint: Point = { x: 2, y: 4 }

// readonly in objects

type User = {
    readonly id : number,
    username : string
}

const user : User = {
    id : 4444,
    username : "jdasl;kf"
};

console.log(user.id);
// we can't do this
// user.id = 45566