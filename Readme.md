// Select all <i> elements within the specified hierarchy
const iElements = document.querySelectorAll('code > div > span > i');

// Initialize an empty string to store the extracted characters
let extractedCharacters = '';

// Iterate through the selected <i> elements and extract the "value" attribute
iElements.forEach((iElement) => {
  const charValue = iElement.getAttribute('value');
  extractedCharacters += charValue;
});

// Output the concatenated character values
console.log(extractedCharacters);