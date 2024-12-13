let currentIndex = 0;

const containers = document.querySelectorAll('.hover-container');
const textBox1 = document.querySelector('.text-box-1');
const textBox2 = document.querySelector('.text-box-2');

containers[currentIndex].style.display = 'block'; // Show the first image

// Text content for each image (12 images)
const texts = [
   { box1Text: "The view of Hyderabad’s Charminar", box2Text: "The view of Golden Charminar at Hitech city, Hyderabad" },
   { box1Text: "Crowded streets bustling with a blend of shopkeepers, local civilians, and tourists in the Old City of Hyderabad", box2Text: "Bustling movement of cars on the structured roads of urban Hyderabad" },
   { box1Text: "Life and activity of people in the area of Koti under the metro flyover", box2Text: "Life of people in cars under a flyover at Hitech city of Hyderabad" },
   { box1Text: "Pathway with years old walls on both side holding livelihood of people residing there, near Charminar", box2Text: "Lane or Roadway with metal sheet walls covering the constructions on both sides, in Hitech City" },
   { box1Text: "Poeple shopping and having street food at Koti bazaar", box2Text: "People having food at IKEA foodcourt after shopping" },
   { box1Text: "The packed landscape of buildings in the Old city near Charnimar", box2Text: "Landscape at Gachibowli, outside IKEA" },
   { box1Text: "Electricity went out, and even then the old chai shop near Charminar never fails to serve their customers with chai", box2Text: "People waiting to get their beverage served when the electricity went out in the cafe at Hitech city" },
   { box1Text: "Garbages floating away in the slow stream of Musi river", box2Text: "Aesthetic fountain at the clean lake of the Novotel complex at Hitech city" },
   { box1Text: "Mehboob Chowk clock tower", box2Text: "Le Meridien, Gachibowli" },
   { box1Text: "A small temple near Charminar with constant movement of people around it", box2Text: "A stranded and closed temple with no movements around apart from the swifts of cars behind" },
   { box1Text: "The old book stores in the subway of Koti Bazaar", box2Text: "A modern bookstore at Inorbit mall complex" },
   { box1Text: "Purana Pul at river Musi", box2Text: "Cable Bridge at Durgam Cheruvu Lake" },
];

function changeImage(direction) {
   containers[currentIndex].style.display = 'none'; // Hide current image
   currentIndex = (currentIndex + direction + containers.length) % containers.length; // Update index
   containers[currentIndex].style.display = 'block'; // Show new image

   // Update text boxes based on the current index
   updateTextBoxes(currentIndex);
}

// Function to play video on hover
containers.forEach((container) => {
   const video = container.querySelector('.video');

   // Initialize hover functionality for each container
   container.addEventListener('mouseover', () => {
       video.play(); // Play video on hover
       video.muted = false; // Ensure audio is enabled
       container.querySelector('.image').style.display = 'none'; // Hide image
       video.style.display = 'block'; // Show video
   });

   container.addEventListener('mouseout', () => {
       video.pause(); // Pause video when not hovering
       video.currentTime = 0; // Reset video to start
       container.querySelector('.image').style.display = 'block'; // Show image again
       video.style.display = 'none'; // Hide video
   });
});

// Function to update text boxes based on current index
function updateTextBoxes(index) {
   const currentTexts = texts[index];
   textBox1.textContent = currentTexts.box1Text;
   textBox2.textContent = currentTexts.box2Text;
}

// Initialize text boxes with the first item's texts
updateTextBoxes(currentIndex);

// Add keyboard navigation functionality
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        changeImage(1); // Move to the next image
    } else if (event.key === 'ArrowLeft') {
        changeImage(-1); // Move to the previous image
    }
});