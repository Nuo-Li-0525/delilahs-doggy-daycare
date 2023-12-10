/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let costPerDay = 35; // default daily rate
let numberOfDaysSelected = 0; // initialize the number of days selected
const dayButtons = document.querySelectorAll(".day-selector li");
const fullDayButton = document.getElementById("full");
const halfDayButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
dayButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Check if the button already has the 'clicked' class
    if (!button.classList.contains("clicked")) {
      button.classList.add("clicked"); // add the 'clicked' class to the clicked button
      numberOfDaysSelected++; // increment the number of days selected
      // Calculate the total cost based on the number of days selected and the cost per day
      const totalCost = numberOfDaysSelected * costPerDay;
      calculatedCost.textContent = totalCost; // update the calculated cost
    }
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", function () {
  // Remove the 'clicked' class from all day buttons
  dayButtons.forEach((button) => {
    button.classList.remove("clicked");
  });
  numberOfDaysSelected = 0; // reset the number of days selected to zero
  calculatedCost.textContent = "0"; // reset the calculated cost to zero
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
fullDayButton.addEventListener("click", function () {
  costPerDay = 35; // set the daily rate back to $35
  fullDayButton.classList.add("clicked"); // add the 'clicked' class to the 'full' button
  halfDayButton.classList.remove("clicked"); // remove the 'clicked' class from the 'half' button
  // Recalculate the total cost based on the updated rate and number of days selected
  const totalCost = numberOfDaysSelected * costPerDay;
  calculatedCost.textContent = totalCost; // update the calculated cost
});

halfDayButton.addEventListener("click", function () {
  costPerDay = 20; // set the daily rate to $20 for half day
  halfDayButton.classList.add("clicked"); // add the 'clicked' class to the 'half' button
  fullDayButton.classList.remove("clicked"); // remove the 'clicked' class from the 'full' button
  // Recalculate the total cost based on the updated rate and number of days selected
  const totalCost = numberOfDaysSelected * costPerDay;
  calculatedCost.textContent = totalCost; // update the calculated cost
});
