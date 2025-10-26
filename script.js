// Password check
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const passwordScreen = document.getElementById("passwordScreen");
const mainContent = document.getElementById("mainContent");
const reopenBtn = document.getElementById("reopenBtn");

// Correct password
const correctPassword = "BANK OF PRAYAGPUR 💰💝💰";

unlockBtn.addEventListener("click", () => {
  const entered = passwordInput.value.trim();

  if (entered === correctPassword) {
    // Unlock site
    passwordScreen.style.display = "none";
    mainContent.classList.remove("hidden");
  } else {
    // Wrong password → redirect
    window.location.href = "Error-window.html";
  }
});

// Allow pressing Enter
passwordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") unlockBtn.click();
});

// Reopen site
reopenBtn.addEventListener("click", () => {
  location.reload();
});

// Calculate totals
const herTotal = 2847;
const hisTotal = 2767;
const total = herTotal + hisTotal;

document.getElementById(
  "grandTotal"
).innerText = `Together we’ve invested ₹${total}/- in love, care, and happiness 💞`;
