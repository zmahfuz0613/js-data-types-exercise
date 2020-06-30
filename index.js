/********************************
 *
 * DO YOUR ASSIGNMENT IN THIS FILE
 *
 *********************************/

// TEST EARLY AND OFTEN - run the code in the terminal by typing 'node index.js' in this directory
// After each step, git add . AND git commit -m "completed part PART-LETTER-HERE"
// Complete all steps specified below - each piece of each step needs to be logged to the console
// using console.log.
// EXAMPLE - Try running node index.js before working on any of the parts and see what happens in the terminal.



const givenVariable = 20;
const doubledVariable = givenVariable * 2;
const tripledVariable = givenVariable * 3;
console.log(doubledVariable);
console.log('EXAMPLE', 'tripledVariable', tripledVariable);
// After running this and feeling comfortable, feel free to comment the above block of code out (either give each line a // or highlight the block of code and press COMMAND - / )

// DATATYPES
 
/********************************
 *
 * STEP A: Strings
 *
 *********************************/


// Set a constant named 'bestClass' equal to the name of our SEI class (myCohortNameHere) capitalized.
// Log this value to the console.
// let bestClass = 'myCohortNameHere'

let bestClass = "myCohortNameHere".toUpperCase()
console.log(bestClass);

// Set a constant named bestClassLowercase that converts bestClass to an all lowercase string.
// Log this value to the console.


let bestClassLowercase = bestClass.toLowerCase()
console.log(bestClassLowercase)


/********************************
 *
 * STEP B: Total
 *
 *********************************/

const amount1 = 1;
const amount2 = 3;

// Write an expression here which adds the values of amount1 and amount2 and
// sets them to a variable called total
// Log the value of total to the console







/********************************
 *
 * STEP C: Basic Conversion
 *
 *********************************/

const pounds = 155;

// Write an expression here which converts pounds to kilograms and set the value equal
// to a variable called "kilograms"
// Log kilograms to the console






/********************************
 *
 * STEP D: Grand Hotel Tremezzo: Part 1
 * Arrays and Array Methods
 *********************************/

// Create a variable grandHotelTremezzoGuests that is equal to an array containing three strings:
// 'George Clooney' 'Silvio Berlusconi'  and 'Isabella Rossellini'.
// Log grandHotelTremezzoGuests to the console.






// A new guest is checking in! Add "Fabio" to the end of the array.
// Log grandHotelTremezzoGuests to the console.







// False alarm! Fabio was on a roller coaster and got hit in the face with a pigeon
// so he won't be able to stay at the hotel remove him from the end of the array.
// Log grandHotelTremezzoGuests to the console.






// A new guest is checking in for real! Add 'Mario Batali' to the end of our array.
// He is wearing a disguise...but orange crocs.
// Log grandHotelTremezzoGuests to the console.









// Another new guest is checking in for real! He's a very important VIP guest
// so let's add 'Gordon Ramsay' to the front of our array.
// Who's going to tell him no? Not me.
// Log grandHotelTremezzoGuests to the console.








// Create a variable called totalGuests that is equal to the number of guests staying in our hotel
// by checking the items count of grandHotelTremezzoGuests array.
// Log totalGuests to the console.







/********************************
 *
 * STEP E: Grand Hotel Tremezzo: Part 2
 *
 *********************************/

// Create a variable 'grandHotelTremezzoPastGuests' set to an empty Array.
// Log grandHotelTremezzoPastGuests to the console








// George Clooney had a scooter accident so he has to check out.
// Remove him from grandHotelTremezzoGuests using the splice method. (Google and MDN are your friends here 😊)
// Then use the push method to add his name to 'grandHotelTremezzoPastGuests'
// Log both grandHotelTremezzoGuests and grandHotelTremezzoPastGuests in the same console.log statement.











// ***Re-assign*** the variable that is equal to the number of guests staying
// in our hotel by checking the current items count of grandHotelTremezzoGuests array.
// (Don't create a new variable!!)
//  Log the variable to the console.






/********************************
 *
 * STEP E: Grand Hotel Tremezzo: Part 2
 *
 *********************************/

// The hotel boss comes to you and says the hotel is going to host
// a beautiful dinner party for the guests. He wants a copy
// of the guest list on which to make his own edits and changes.
// Create a variable that is a copy of the grandHotelTremezzoGuests
// array and log the result.






// The boss wanted the copy of the guest list but doesn't want to make
// the changes himself. He says, "I sign your checks, you work for me!"
// What choice do you have? You really need this job. He wants you to
// check the list for him.
// On your newly created variable containing the copy, see if the list
// includes Gordon Ramsay, the boss' favorite chef.





// Now that the boss has verified Gordon is on the list, he notices
// over your shoulder that he's at the front. He wants you to move the
// list order around so that Gordon is at the end because "You save the best for
// last! Scramble it, reverse it, do whatever you have to do"
// Find the right method to accomplish this task.




/********************************
 *
 * BONUS!!!!!!!
 *
 *********************************/



/********************************
 *
 * Bonus 1
 *
 *********************************/


// Create an empty array assigned to a variable called sleepingGuests
// Log sleepingGuests to the console.







// The guests passed out. Loop over the guests and add them to the sleepingGuests array.
// (Don't remove them from grandHotelTremezzoGuests.)
// Log sleepingGuests to the console.








/********************************
 *
 * Bonus 2
 *
 *********************************/



// The hotel is going to deliver a bottle of Nero de Como to each guest.
// Use a for loop to log out '*PERSON'S NAME* gets a bottle of Nero de Como'
// for each guest in the grandHotelTremezzoGuests array.







// The guests drank their bottles of Nero de Como and are getting rowdy.
// Tell them to be quiet by using a for loop to log ... '*PERSON'S NAME* please hush up!!!'
// for each guest in the grandHotelTremezzoGuests array.







/********************************
 *
 * Bonus 3
 *
 *********************************/

// Lake Como has started to flood so all of the guests are fleeing to Milan.
// Use splice to remove all of the guests (simultaneously using push to add them
// to the array of checked out guests). Log both grandHotelTremezzoGuests
// and grandHotelTremezzoPastGuests in the same log statement.




