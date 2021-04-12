//1
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?"
//use the .length method to determine the length of the string value. 
//1 Code Answer
let dogQuestion = ("But what if I like dogs more than cats?");
console.log(dogQuestion.length);
//1 Result Answer
// 39


//2
//Write a variable and call it noms and have the value of the name any type of snack you like, 
//use the .length method to determine the length of the string value. 
//2 Code Answer
let noms = prompt("What kind of snack do you like?");
console.log(noms.length);
// 2 Result Answer
// Peanuts: 7



//3 
//Replace "no" values in the "I have no interest in Boba" in string using the correct method.
//3 Code Answer
let replaceWord = "I have no interest in Boba";
console.log(replaceWord.replace("no","some"));

//3 Result Answer:
// I have some interest in Boba


//4
//Trim this string "Tell me whyyyy!                 ".
//4 Code Answer
let phrase = "Tell me whyyyy!                 ";
console.log(phrase.trim());

//4 Result Answer
// Tell me whyyyy!


//5
// Convert 1400 into a string.
//5 Code Answer:
let num = 1400;
console.log(num.toString());

//5 Result Answer:
// 1400

//6
//Convert the boolean true and false into integers
//6 Code Answer:
console.log(Number(true));
console.log(Number(false));
//6 Result Answer:
// 1
// 0



//7
// Convert the string "02130" into an integer
//7 Code Answer:
let numString = "02130";
// console.log(parseInt(zipcode));
// this gives the same answer:
console.log(Number(numString));
//7 Result Answer:
// 2130


//8
//Search the string "Fighting Evil by Moonlight" for "Moonlight" content using the correct method.
//8 Code Answer:
let phrase2 = "Fighting Evil by Moonlight";
console.log(phrase2.includes("Moonlight"));
//8 Result Answer:
//true 


//9
//Concatenate the following "I love"+ favorite food + Favorite drink "!"
//9 Code Answer:
let str1 = "I love ";
let str2 = "!";
console.log(str1.concat("avocado slices and grilled salmon", str2));
//9 Result Answer:
//I love sushi and matcha!


//10 [ note this is a repeat of #1 ]
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?", 
//use the .length method to determine the length of the string value. 
//10 Code Answer:
let dogQuestion2 = "But what if I like dogs more than cats?";
console.log(dogQuestion2.length);
//10 Result Answer:
//39 


//11
//Print to the console the smallest number in this list: 85, -3, 5, 93.2, -42.4 (list of numbers must be passed in this order)
//(Hint: Which Math method can you use to do this?)
//11 Code Answer:
console.log(Math.min(85, -3, 5, 93.2, -42.4));
//11 Result Answer:
//-42.4

//12
//Print to the console a random number between 1 to 10.
//12 Code Answer:
console.log(Math.floor((Math.random()*10))+1);
//12 Result Answer:
// a random distribution of integers 1 to 10 inclusive 


//13
//Print to the console a random number between 14 to 21.
//13 Code Answer:
console.log(Math.floor((Math.random()*8))+14);
//13 Result Answer:
// a random distribution of integers 14 to 21 inclusive 


//14 Challenge! (Optional)
//Print to the console the current date in the format of "MM/DD/YYYY" using Date object methods you learned 

//14 Code Answer:

function check(raw){
    if (raw < 10){
        return(`0${raw}`);
    }
    else{
        return(`${raw}`);
    }
}
let d = new Date();
month = check(d.getMonth()+1);
day = check(d.getDate());
year = d.getFullYear();
console.log(`${month}/${day}/${year}`);

//14 Result Answer:
//current date