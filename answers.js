////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 0; i <= 20; i++){
    console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i<= 200; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 0; i<= 100; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log("FizzBuzz")
    } else if(i % 5 === 0){
        console.log("Buzz")
    } else if( i % 3 === 0){
        console.log("Fizz")
    } else {
        console.log(i)
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

//1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] += 1;
console.log(plantee)

//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[wolfy.length - 1] = "Gotham City";
console.log(wolfy)

//3. Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart)

//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy";
console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (let element of ninjaTurtles){ 
    element = element.toUpperCase();
    console.log(element)
}


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////