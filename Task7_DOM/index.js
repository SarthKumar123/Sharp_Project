




const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
para.appendChild(paraText);
para.setAttribute('id', 'fruits-total');

// Create the sub-heading (h3) element and set its content
const heading = document.createElement('h3');
const headingText = document.createTextNode('Buy high quality organic fruits online');
heading.appendChild(headingText);

// Insert the paragraph before the unordered list in the second div
const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];
const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para, fruits);

// Append the sub-heading to the first div after the main heading
const firstDiv = divs[0];
firstDiv.appendChild(heading);

// Make the sub-heading text italic
heading.style.fontStyle = 'italic';
