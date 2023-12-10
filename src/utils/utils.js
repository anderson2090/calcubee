export const isLastElementString = (arr) => {
  // Check if the array is not empty
  if (arr.length > 0) {
    // Get the last element of the array
    const lastElement = arr[arr.length - 1];

    // Check if the last element is a string
    return typeof lastElement === "string";
  } else {
    // If the array is empty, return false
    return false;
  }
};
