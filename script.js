document.addEventListener('DOMContentLoaded', function() {
    const secretNumber = "2011";
    const hints = [
        "Look where the sun rises, not where it sets.",
        "The treasure is hidden beneath what you seek.",
        "Follow the path less traveled to find your reward.",
        "Sometimes the answer is right in front of you.",
        "Look high and low, the treasure awaits the persistent.",
        "Not all treasures are gold, but this one might be.",
        "The key to success is often hidden in plain sight.",
        "When in doubt, look to the stars for guidance."
    ];

    const secretNumberInput = document.getElementById('secretNumber');
    const checkButton = document.getElementById('checkButton');
    const hintBox = document.getElementById('hintBox');
    const hintText = document.getElementById('hintText');
    const errorMessage = document.getElementById('errorMessage');

    // Function to check the secret number
    function checkSecretNumber() {
        if (secretNumberInput.value === secretNumber) {
            // Show a random hint
            const randomHint = hints[Math.floor(Math.random() * hints.length)];
            hintText.textContent = randomHint;
            hintBox.classList.remove('hidden');
            errorMessage.classList.add('hidden');
        } else {
            // Hide the hint box and show error message
            hintBox.classList.add('hidden');
            errorMessage.classList.remove('hidden');
            
            // Add a small shake animation to the input
            secretNumberInput.classList.add('shake');
            setTimeout(() => {
                secretNumberInput.classList.remove('shake');
            }, 500);
        }
    }

    // Clear error message when typing
    secretNumberInput.addEventListener('input', function() {
        errorMessage.classList.add('hidden');
    });

    // Event listeners
    checkButton.addEventListener('click', checkSecretNumber);
    
    // Allow pressing Enter key to check
    secretNumberInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkSecretNumber();
        }
    });

    // Focus the input field when page loads
    secretNumberInput.focus();
}); 