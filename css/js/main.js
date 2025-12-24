
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      
      this.style.display = "none";
      const successMsg = document.getElementById("successMsg");
      if (successMsg) {
        successMsg.style.display = "block";
        successMsg.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});