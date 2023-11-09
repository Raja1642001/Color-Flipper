function generateRandomColor() {
    // Generate a random color in hex format
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

const button = document.getElementById('btn');
const wrap = document.getElementById('wrap');
const colorHeading = document.getElementById('color');

button.addEventListener('click', () => {
    // Generate a random color
    const randomColor = generateRandomColor();

    // Set the background color of the wrap section
    wrap.style.backgroundColor = randomColor;

    // Set the text content of the color heading to the random color
    colorHeading.textContent = randomColor;
});
