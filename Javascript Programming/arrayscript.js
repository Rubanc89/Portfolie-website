function removeDuplicates(arr) {
    // Use a Set to store unique values
    const uniqueSet = new Set(arr);
  
    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);
  
    return uniqueArray;
  }
  
  const inputArray = [1, 2, 3, 4, 5, 1, 6, 2, 7, 1, 3];
  const outputArray = removeDuplicates(inputArray);
  
  console.log(outputArray); // Output: [1, 2, 3, 4, 5, 6, 7]
  
  console.log([...new Set(inputArray)])