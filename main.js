const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// A first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];
let uncookedFood2 = uncookedFood
// 
// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

function grill (currentObject) {
  // Modify the food so that it is cooked
  currentObject.cooked = true;

  // Put the cooked food into the appropriate array
  cookedFood.push(currentObject);
};

// // Your task is to iterate over the array of uncookedFood and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.
// _____________________________________________________________________________________

// *Answer #1*
// ---My way of doing it so that each item in the uncooked array can be cooked individually, removed from the uncooked array, and added to the cooked array.

function grilling(i) {
  i.cooked = true;
  cookedFood.push(i);
  for (var j = 0; j <= uncookedFood.length; j++) {
    if (uncookedFood[j] === i)
    uncookedFood.splice(i, 1);
  }
}
  
grilling(hamburger);
uncookedFood
//______________________________________________________________________
//The answers below were done after coming back to the exercise a few days later with a better understanding of what I was wanting to do.

//  *Answer #2*
// ---This way will cook all the items at once and push them all to the cookedFood array, but it will not take them out of the uncooked array.
  
  for (let i = 0; i < uncookedFood.length; i++) {
    uncookedFood[i].cooked = true
    cookedFood.push(uncookedFood[i])

  }

//______________________________________________________________________
// *Answer #3 and #4*
// ---These both do the same thing (cooking the food, and moving it from uncooked to cooked) they just use slightly different syntax.
  
  for (let i = 0; i < uncookedFood.length; i) {
    uncookedFood[i].cooked = true
    cookedFood.push(uncookedFood[i]);
    uncookedFood.splice(i, 1);
  }

  //  OR I can do it this way!

  for (let i = 0; i < uncookedFood.length; i++) {
    uncookedFood[i].cooked = true
    cookedFood.push(uncookedFood[i]);
    uncookedFood.splice(i, 1);
    i = i - 1
  }
  
