const header = document.getElementById('header');
header.style.backgroundColor = 'green';
header.style.borderBottom = '3px solid orange';

// Get the main heading and change its text and color
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Fruit World';
mainHeading.style.color = 'orange';

// Get the basket heading and change its color
const basketHeading = document.getElementById('basket-heading');
basketHeading.style.color = 'green';

// Add a paragraph inside the thanks div
const thanks = document.getElementById('thanks');
thanks.innerHTML = '<p>Please visit us again</p>';
