function getRandomNumberBetween(min, max) {
  /// return random number between provided minimum and maximum parameter
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeText() {
  /// Set up the option arrays for Text & Colour
  const textArray = ['Text One', 'Text Two', 'Text Three', 'Text Four', 'Text 5', 'Text 6'];
  const colourArray = ['red', 'green', 'blue', 'yellow', 'white', 'orange', 'purple', 'grey'];
  /// Set up the random numbers to used as indices to the arrays
  let number = getRandomNumberBetween(0, textArray.length - 1);
  let otherNo = getRandomNumberBetween(0, colourArray.length - 1);
  /// Ensure that the text colour and backgraound colour do not match
  let bgNo = getRandomNumberBetween(0, colourArray.length - 1);
  if (bgNo == otherNo) {
    /// Output a note that the colour is being changed to the console
    console.log('Chaning random numbers to prevent background matching text');
    if (bgNo > 1) {
      bgNo -= 1;
    } else {
      bgNo += 1;
    }
  }
  /// Output the text number to the console
  console.log('Index: ', number);
  /// Get & Set the html heading element properties based on the array options
  /// using the random numbers
  document.getElementById('heading').innerHTML = textArray[number];
  document.getElementById('heading').setAttribute('class', 'center-align ' + colourArray[otherNo] + '-text' + ' card-panel ' + colourArray[bgNo]);
}
