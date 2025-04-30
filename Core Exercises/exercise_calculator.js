document.addEventListener("DOMContentLoaded", () => {
    const timeMinInput = document.getElementById("time-min");
    const timeSecInput = document.getElementById("time-sec");
    const setsInput = document.getElementById("sets-done");
    const caloriesOutput = document.getElementById("calories-burnt");

    if (!setsInput || !caloriesOutput) return; // Prevent errors if elements are missing

    // Base calorie burn rate per minute (adjustable per exercise)
    const calorieBurnRate = {
        crunches: 5, // Calories per minute
        plank: 3,    // Plank burns slightly less
        leglifts: 4  // Leg Lifts burn at a moderate rate
    };

    function getExerciseType() {
        const titleText = document.querySelector("h1").textContent.toLowerCase();
        if (titleText.includes("plank")) return "plank";
        if (titleText.includes("leg lifts")) return "leglifts";
        return "crunches"; // Default to crunches
    }

    function calculateCalories() {
        const exerciseType = getExerciseType();
        const rate = calorieBurnRate[exerciseType] || 5;

        const minutes = parseFloat(timeMinInput?.value) || 0;
        const seconds = parseFloat(timeSecInput?.value) || 0;
        const sets = parseFloat(setsInput.value) || 0;

        const totalTime = (minutes + seconds / 60) * sets;
        const caloriesBurned = totalTime * rate;

        caloriesOutput.value = caloriesBurned.toFixed(2);
    }

    // Event listeners to trigger calorie calculation on input change
    timeMinInput?.addEventListener("input", calculateCalories);
    timeSecInput?.addEventListener("input", calculateCalories);
    setsInput.addEventListener("input", calculateCalories);
});
