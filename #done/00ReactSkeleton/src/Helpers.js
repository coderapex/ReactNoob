function choice(items) {
  // return a randomly selected item from items
  let selctedItem = "";

  // logic here
  selctedItem = items[Math.floor(Math.random() * items.length)];

  return selctedItem;
}

function remove(items, item) {
  // removes the item from items array
  let exists = false;
  let position = -1;

  // logic here
  // 1. check if the item exists in array
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      // console.log("Selected " + items[i] + " is " + "item");
      exists = true;
      position = i;
    } else {
      // console.log("Selected " + items[i] + " is NOT " + item);
    }
  }

  // 2. remove item from the array if it is found
  if (exists === true) {
    items.splice(position, 1);
    // console.log(item + " found at index " + position);
  } else {
    // console.log(item + " NOT found.");
  }

  // return item if exists or else return undefined
  if (exists) return items;
  else return undefined;
}

export { choice, remove };
