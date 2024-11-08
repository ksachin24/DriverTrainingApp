let hazardActive = false;

function startSimulation() {
    const hazards = [
        "Sudden Stop Ahead!",
        "Pedestrian Crossing!",
        "Sharp Turn Ahead!",
        "Animal on the Road!"
    ];
    const randomHazard = hazards[Math.floor(Math.random() * hazards.length)];
    document.getElementById("hazardMessage").innerText = randomHazard;

    // Enable response button
    hazardActive = true;
    document.getElementById("respondButton").disabled = false;
    document.getElementById("responseFeedback").innerText = ""; // Reset feedback
}

function respondToHazard() {
    if (hazardActive) {
        document.getElementById("responseFeedback").innerText = "Good reaction!";
        hazardActive = false;
        document.getElementById("respondButton").disabled = true; // Disable after responding
    } else {
        document.getElementById("responseFeedback").innerText = "No active hazard!";
    }
}
