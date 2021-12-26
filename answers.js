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
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(`The index of Titanic is ${favMovies.indexOf('Titanic')}`)

//1. use the .sort method
console.log(favMovies);
favMovies.sort();
console.log(favMovies);
// what did this do to the array?
//It sorted the array in ascending alphabetical order. 

//Did it permanently alter it?
//I believe it permanently altered the array, since I can't console log the original

//2. Use the method pop
favMovies.pop()

//3. push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy")


//4. Reverse the array
favMovies.reverse()


//5. Use the shift method
favMovies.shift();


//6. unshift - what does it return?
favMovies.unshift();
//it wont return anything unless I write something inside the parenthesis. If I do write something it will add it as the first element in the index.

//7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself)
console.log(favMovies.indexOf('Django Unchained'))
favMovies.splice(14, 1, 'Avatar')//index, remove or add (1/0), new element (optional)
//Thought question: did this permanently alter our array?
//Yes, because it replaced the item.

//8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it)
console.log(`There are ${favMovies.length} movies in the favMovies array`)
favMovies.slice(-9)//starts from the end of the array;
//Thought question: did this permanently alter our array?
//No. It made a copy of the elemensts I asked for

//9. store the value of your slice in a variable, console.log it
let condensedFavMovies = favMovies.slice(-9);
console.log(condensedFavMovies);
//Thought question: what is going on here?
//the copy taken by the slic method was given a new variable

//10. console.log your final results
console.log(favMovies)

//11. After running the above tasks, console.log the index of "Fast and Furious" 
console.log(favMovies.indexOf('Fast and Furious'))
console.log(favMovies.indexOf('Django Unchained'))
//We removed it from the array, what value do we get when we look for the index of something that is not in the array?
//Fast and Furious wasn't removed from the array, but when I run Django Unchained (replaced with Avatar) I get a -1 index.

//12. Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
//No. We didn't change what the variable was equal to (an array). We changed the elements inside the value of the variable. 

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1, 1)
whereIsWaldo[1][2] = "No One"
console.log(`I found ${whereIsWaldo[2][1][1]}!`)
console.log(whereIsWaldo)

////////////////////////////////
//  Excited Kitten
////////////////////////////////
for (let i = 0; i <= 20; i++){
    if(i % 2 === 0){
        let response = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
        let randomizer = Math.floor(Math.random() * response.length);
        console.log(response[randomizer]);
    } else {
        console.log('Love me, pet me! HSSSSSS!')
    }
}

////////////////////////////////
//  Find the Median
////////////////////////////////