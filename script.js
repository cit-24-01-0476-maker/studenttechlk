function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
}

function subscribeUser(event) {
  event.preventDefault();

  const email = document.getElementById("emailInput").value;

  alert("Thank you! " + email + " subscribed successfully.");

  document.getElementById("emailInput").value = "";
}