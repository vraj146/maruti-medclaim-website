document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("responseMessage").textContent = "Thank you! We will contact you shortly.";
  this.reset();
});
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("show");
}
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("show");
}
