function getElementWidth(content, padding, border) {
  let numContent = parseFloat(content);
  let numPadding = parseFloat(padding);
  let numBorder = parseFloat(border);
  let fullWidth = numContent + (numPadding + numBorder) * 2;
  return fullWidth;
}
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
