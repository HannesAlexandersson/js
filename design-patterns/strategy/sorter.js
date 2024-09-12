const bubbleSort = (arr) => {
  const array = [...arr];
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
          if (array[j] > array[j + 1]) {
              [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap
          }
      }
  }
  return array;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }

    if (indexMin !== i) {
      let lesser = arr[indexMin];
      arr[indexMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter((el) => el < pivot);
  const right = arr.filter((el) => el > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
};

// Here's three sort methods. Implement the strategy pattern so that we easily can switch between different sorting strategies for an array of numbers, like the one below.



// Lookup table instead of if-else or switch
const strategies = {
  "bubble": bubbleSort,
  "selection": selectionSort,
  "quick": quickSort,
}
// Set discount based on customer type
const applySorting = (numbers, sortingStrategy) => {
  return sortingStrategy(numbers);
}
// Our customer is shopping for 100 and is a premium customer.
let numbers = [4,1,49,23,12,3,100,8,43,58,7]
let sortingType = 'bubble';

// Select the appropriate strategy based on customer type
let sortingStrategy;
sortingStrategy = strategies[sortingType]

const finalArray = applySorting(numbers, sortingStrategy);
console.log(`Sorting the array: ${finalArray}`);