document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const message = document.getElementById('message');
    const aboutButton = document.getElementById('aboutButton');
    
    // Play button toggle functionality
    if (playButton && message) {
        let isVisible = false;
        
        playButton.addEventListener('click', function() {
            if (isVisible) {
                message.classList.remove('show');
                isVisible = false;
            } else {
                message.classList.add('show');
                isVisible = true;
            }
        });
    }
    
    // About page button functionality
    if (aboutButton) {
        aboutButton.addEventListener('click', function() {
            // Sample data - in a real application, this would come from a database or user input
            const userData = {
                name: "John Doe",
                registrationNumber: "REG123456789",
                phoneNumber: "+1-234-567-8900"
            };
            
            const alertMessage = `Name: ${userData.name}\nRegistration Number: ${userData.registrationNumber}\nPhone Number: ${userData.phoneNumber}`;
            alert(alertMessage);
        });
    }
});

// Add smooth animations and effects
function addAnimations() {
    const imageCards = document.querySelectorAll('.image-card');
    
    imageCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in');
    });
}

// Call animations when page loads
document.addEventListener('DOMContentLoaded', addAnimations);