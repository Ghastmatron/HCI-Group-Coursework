// Array with 9 different values to be shuffled
const valuesArray = ['Value1', 'Value2', 'Value3', 'Value4', 'Value5', 'Value6', 'Value7', 'Value8', 'Value9'];

// Function to shuffle the elements with the class "homeItem"
function shuffleHomeItems() {
    const homeItems = document.querySelectorAll('.homeItem');
    const parent = homeItems[0].parentNode;
    console.log("Before shuffling:", [...homeItems].map(item => item.textContent)); // Log the order before shuffling
    for (let i = homeItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        parent.insertBefore(homeItems[j], homeItems[i]);
        console.log("Shuffling:", [...homeItems].map(item => item.textContent)); // Log the order during shuffling
    }
    console.log("After shuffling:", [...homeItems].map(item => item.textContent)); // Log the order after shuffling
    console.log(valuesArray); // Print the values array
}
// Event listener for the "Shuffle" button
document.addEventListener('DOMContentLoaded', function() {
    const shuffleButton = document.querySelector('.navbar2 h2:nth-of-type(2)');
    shuffleButton.addEventListener('click', shuffleHomeItems);
});