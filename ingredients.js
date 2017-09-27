var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var item = 0
while (item < ingredients.length) {
  console.log(ingredients[item]);
  item++
}


// Write a for loop that prints out the contents of ingredients:

for (i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (i = ingredients.length -1; i >= 0; i--){
  console.log(ingredients[i]);
}

/* V's note: the above works because arrays are 0 indexed (start at 0), but the .length function returns a value that's logical for the way humans
count (i.e. is 1 indexed).

K says this also would work:

for (i = ingredients.length; i > 0; i--){
  console.log(ingredients[i-1]);
}

*/