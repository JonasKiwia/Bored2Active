// Fetch a random activity from the Bored API
function fetchActivity() {
    fetch('activities.json') // Fetch the local JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error(` HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Select a random activity from the JSON array
            const randomIndex = Math.floor(Math.random() * data.length);
            const activity = data[randomIndex].activity;

            // Display the activity on the page
            document.getElementById('activity').innerText = activity;
        })
        .catch(error => {
            console.error('Error fetching activity:', error);
            document.getElementById('activity').innerText = "Oops! Unable to fetch activity.";
        });
}

// Fetch a random joke from JokeAPI
function fetchJoke() {
    fetch('https://v2.jokeapi.dev/joke/Dark,Programming?type=single')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerText = data.joke;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}

// Fetch a random dog image from Dog CEO's Dog API
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogImage').src = data.message;
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
}

// Fetch default data on page load
window.onload = () => {
    fetchActivity();
    fetchJoke();
    fetchDogImage();
};