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

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];
// 
// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.
// 
function grill (currentObject) {
  // Modify the food so that it is cooked
  currentObject.cooked = true;

  // Put the cooked food into the appropriate array
  cookedFood.push(currentObject);
};

// Your task is to iterate over the array of uncookedFood and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.
//
//  uncookedFood.forEach((foodItem) => {
//   grill(foodItem)
// })
// console.log(cookedFood)

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

