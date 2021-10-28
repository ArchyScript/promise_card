//

// Arrays of Solid Colors
const backgroundColors = [
  "orange", "lightgreen", "lightblue",
  "coral", "aqua", "magenta", 
  "lime", "pink", "azure",
  "aliceblue", "beige", "bisque",
  "burlywood", "lightsalmon", "lavender",
  "orchid", "navajowhite", "mistyrose",
  "oldlace", "plum", "paleturquoise"
]

const cardContainer = document.getElementById("card_container")
const changeBackgroundBtn = document.getElementById("change_background_btn")
// const printCardBtn = document.getElementById("print_card_btn")

const changeBackgroundColor = (displayColors) => {
  // Generate a random number between 0 and the length of all solid colors in the array
  let randomColorIndex = Math.floor(Math.random() * displayColors.length)           
  
  // Set the container background to that of the random color generated from the array
  cardContainer.style.background = displayColors[randomColorIndex]
  // changeBackgroundBtn.style.background = displayColors[randomColorIndex]
};
// Call the changeBackgroundColor function
changeBackgroundColor(backgroundColors)

// Change background color of the container on click on "change_background_btn"
changeBackgroundBtn.onclick = () => changeBackgroundColor(backgroundColors)
// cardContainer.onclick = () => changeBackgroundColor(backgroundColors)

/*
// Create a function to print card
function printCard () {
  let check = confirm("Are you sure you want to print Card?")
  if (check) { 
    changeBackgroundBtn.style.display = "none"
    printCardBtn.style.display = "none" 
    
    window.print()
  } else {
    changeBackgroundBtn.style.display = "block"
    printCardBtn.style.display = "block" 
  } 
} 
// Click the Print_Card_btn to call the printCard function
printCardBtn.onclick = () => printCard()
*/





// complete name of the image file in the resources
// 9cf06d82cc724a28bfc0018912203b05.jpg  

//