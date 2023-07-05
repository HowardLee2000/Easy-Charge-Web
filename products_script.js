/* displaying content based on the buttons clicked */
function showFnb() {
    var fnb = document.getElementById("fnb");
    var health = document.getElementById("health");
    var personal = document.getElementById("personal");
    var hotel = document.getElementById("hotel");
    var retail = document.getElementById("retail");
    var sport = document.getElementById("sport");
    var entert = document.getElementById("entert");
    fnb.style.display = "grid";
    health.style.display = "none";
    personal.style.display = "none";
    hotel.style.display = "none";
    retail.style.display = "none";
    sport.style.display = "none";
    entert.style.display = "none";

}
function showHealth() {
    var fnb = document.getElementById("fnb");
    var health = document.getElementById("health");
    var personal = document.getElementById("personal");
    var hotel = document.getElementById("hotel");
    var retail = document.getElementById("retail");
    var sport = document.getElementById("sport");
    var entert = document.getElementById("entert");
    fnb.style.display = "none";
    health.style.display = "grid";
    personal.style.display = "none";
    hotel.style.display = "none";
    retail.style.display = "none";
    sport.style.display = "none";
    entert.style.display = "none";
}
function showPersonal() {
    var fnb = document.getElementById("fnb");
    var health = document.getElementById("health");
    var personal = document.getElementById("personal");
    var hotel = document.getElementById("hotel");
    var retail = document.getElementById("retail");
    var sport = document.getElementById("sport");
    var entert = document.getElementById("entert");
    fnb.style.display = "none";
    health.style.display = "none";
    personal.style.display = "grid";
    hotel.style.display = "none";
    retail.style.display = "none";
    sport.style.display = "none";
    entert.style.display = "none";
}
function showHotel() {
    var fnb = document.getElementById("fnb");
    var health = document.getElementById("health");
    var personal = document.getElementById("personal");
    var hotel = document.getElementById("hotel");
    var retail = document.getElementById("retail");
    var sport = document.getElementById("sport");
    var entert = document.getElementById("entert");
    fnb.style.display = "none";
    health.style.display = "none";
    personal.style.display = "none";
    hotel.style.display = "grid";
    retail.style.display = "none";
    sport.style.display = "none";
    entert.style.display = "none";
}
function showRetail() {
    var fnb = document.getElementById("fnb");
    var health = document.getElementById("health");
    var personal = document.getElementById("personal");
    var hotel = document.getElementById("hotel");
    var retail = document.getElementById("retail");
    var sport = document.getElementById("sport");
    var entert = document.getElementById("entert");
    fnb.style.display = "none";
    health.style.display = "none";
    personal.style.display = "none";
    hotel.style.display = "none";
    retail.style.display = "grid";
    sport.style.display = "none";
    entert.style.display = "none";
}
function showSport() {
    var fnb = document.getElementById("fnb");
    var health = document.getElementById("health");
    var personal = document.getElementById("personal");
    var hotel = document.getElementById("hotel");
    var retail = document.getElementById("retail");
    var sport = document.getElementById("sport");
    var entert = document.getElementById("entert");
    fnb.style.display = "none";
    health.style.display = "none";
    personal.style.display = "none";
    hotel.style.display = "none";
    retail.style.display = "none";
    sport.style.display = "grid";
    entert.style.display = "none";
}
function showEntert() {
    var fnb = document.getElementById("fnb");
    var health = document.getElementById("health");
    var personal = document.getElementById("personal");
    var hotel = document.getElementById("hotel");
    var retail = document.getElementById("retail");
    var sport = document.getElementById("sport");
    var entert = document.getElementById("entert");
    fnb.style.display = "none";
    health.style.display = "none";
    personal.style.display = "none";
    hotel.style.display = "none";
    retail.style.display = "none";
    sport.style.display = "none";
    entert.style.display = "grid";
}

/* switch active button based on button clicked */
function activateButton(buttonId) {
  // Get the button element by its ID
  const button = document.getElementById(buttonId);

  // Remove the "active-btn" class from all buttons
  const buttons = document.querySelectorAll('.category button');
  buttons.forEach((btn) => {
    btn.classList.remove('active-btn');
    btn.classList.add('not-active');
  });

  // Add the "active-btn" class to the clicked button
  button.classList.remove('not-active');
  button.classList.add('active-btn');
}