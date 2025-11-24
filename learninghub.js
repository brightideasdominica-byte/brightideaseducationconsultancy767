// ===============================
// SEARCH FUNCTIONALITY
// ===============================

const searchInput = document.getElementById("searchInput");
const categoryCards = document.querySelectorAll(".category-card");

// Only run if search bar exists on this page
if (searchInput && categoryCards.length > 0) {
  searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();

    categoryCards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(filter)) {
        card.parentElement.style.display = "block";  // Show the <a> wrapper
      } else {
        card.parentElement.style.display = "none";   // Hide the <a> wrapper
      }
    });
  });
}

// ===============================
// FORCE FOOTER TO STAY LOWER
// ===============================

const footer = document.querySelector("footer");

function adjustFooter() {
  const pageHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;

  if (pageHeight < windowHeight) {
    // Fix footer at bottom
    footer.style.position = "fixed";
    footer.style.bottom = "0";
    footer.style.left = "0";
    footer.style.width = "100%";

    // Add extra space so footer sits LOWER
    document.body.style.paddingBottom = "200px"; 
  } else {
    // Restore normal position
    footer.style.position = "static";
    document.body.style.paddingBottom = "0";
  }
}

// Run on load
adjustFooter();

// Run when searching
if (searchInput) {
  searchInput.addEventListener("keyup", adjustFooter);
}

// Run if window changes size
window.addEventListener("resize", adjustFooter);



