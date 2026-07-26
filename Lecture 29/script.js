const accessKey = "rQHEEIspZdrFuR4CAW0G4tBAmoNUn5xUHkafhajp94k";

const topics = [
    "technology",
    "summer",
    "movies",
    "travel",
    "python",
    "artificial-intelligence",
    "cyber-security",
    "cloud-computing",
    "data-analytics",
    "machine-learning",
    "healthyfood",
    "anime"
];

topics.forEach((topic, index) => {

    fetch(`https://api.unsplash.com/photos/random?query=${topic}&client_id=${accessKey}`)

        .then(response => response.json())

        .then(data => {

            document.getElementById(`img${index + 1}`).src = data.urls.small;

        })

        .catch(error => console.log(error));

});