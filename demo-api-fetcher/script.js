// Select elements from the DOM
const fetchJokeButton = document.getElementById('fetch-joke-btn');
const jokeDisplay = document.getElementById('joke');

// Add event listener to the button
fetchJokeButton.addEventListener('click', fetchJoke);

// Function to fetch and display a random joke
async function fetchJoke() {
    try {
        // Fetch random joke from the API
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        
        // Check if response is OK
        if (!response.ok) {
            throw new Error('Failed to fetch the joke.');
        }

        // Convert response to JSON
        const joke = await response.json();

        // Display the joke setup and punchline
        jokeDisplay.textContent = `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
        // Display error message
        jokeDisplay.textContent = `Error: ${error.message}`;
    }
}
