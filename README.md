# Color Flipper

Welcome to Color Flipper, a fun project that generates random colors and allows you to change the background color with a click of a button!

## Usage

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/Raja1642001/Color-Flipper.git
   ```

2. Open the `index.html` file in your preferred web browser.

3. Click the "Click to change Color" button to see the magic happen!

## How it Works

The project is built using HTML, CSS, and JavaScript. The `index.js` file contains the logic to generate a random color and update the background color of the `wrap` section and the text content of the `color` heading.

```javascript
// Code snippet from index.js
function generateRandomColor() {
    // Generate a random color in hex format
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

// Event listener for the button click
button.addEventListener('click', () => {
    // Generate a random color
    const randomColor = generateRandomColor();

    // Set the background color of the wrap section
    wrap.style.backgroundColor = randomColor;

    // Set the text content of the color heading to the random color
    colorHeading.textContent = randomColor;
});
```

Feel free to explore and modify the code to suit your preferences!
