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
    const floorSelect = document.getElementById('floorSelect');

    // Function to show hint based on floor selection
    function showHint() {
        const selectedFloor = floorSelect.value;
        if (selectedFloor === "0") {
            hintText.innerHTML = "Where people go to get some cash,<br>But not where sunlight makes a splash.<br>Head to the lower floor below,<br>That's where the hidden riches flow";
            hintBox.classList.remove('hidden');
            errorMessage.classList.add('hidden');
        } else if (selectedFloor === "5") {
            hintText.innerHTML = "Time turns quick inside my cave,<br>I make your leftovers hot and brave.";
            hintBox.classList.remove('hidden');
            errorMessage.classList.add('hidden');
        } else {
            hintBox.classList.add('hidden');
            errorMessage.classList.remove('hidden');
        }
    }

    // Clear error message when changing selection
    floorSelect.addEventListener('change', function() {
        errorMessage.classList.add('hidden');
    });

    // Event listeners
    checkButton.addEventListener('click', showHint);

    // Allow pressing Enter key to check
    floorSelect.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            showHint();
        }
    });

    // Focus the input field when page loads
    floorSelect.focus();
}); 