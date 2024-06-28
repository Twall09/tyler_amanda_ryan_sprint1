// Description: Semester 2: Midterm Sprint Gary Blues Diner Home Page
// Page completed by Ryan Tibbo
// Group: Tyler Wall, Amanda Halley, Ryan Tibbo

function quantityInputs() {
  const quantityInputs = document.querySelectorAll(".foodbox input");

  quantityInputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value < 0) {
        input.value = 0;
      }
    });
  });
}

function foodType() {
  const foodForm = document.getElementById("foodForm");

  foodForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const quantities = {};
    document.querySelectorAll(".foodbox input").forEach((input) => {
      quantities[input.id] = input.values;
    });

    const urlParams = new URLSearchParams();
    Object.keys(quantities).forEach((key) => {
      urlParams.append(key, quantities[key]);
    });

    window.location.href = "confirmation.html?" + urlParams.toString();
  });
}

function checkoutInformation() {
  const infoForm = document.getElementById("infoForm");

  infoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(infoForm);

    const urlParams = new URLSearchParams();
    for (const pair of formData.entries()) {
      urlParams.append(pair[0], pair[1]);
    }

    if (!cardNumber || !csv || !expiryDate || !address || !postalCode) {
      alert("Please fill out all fields.");
      return;
    }

    alert("Your order has been confirmed!");

    document.addEventListener("DOMContentLoaded", () => {
      foodType();
      quantityInputs();
      checkoutInformation();
    });
  });
}

const searchicon2 = document.querySelector("#searchicon2");
const search = document.querySelector("#searchinput");
const searchInput = search.querySelector("input");

searchicon2.addEventListener("click", function () {
  search.style.display = "flex";
  searchInput.focus();
});
search.addEventListener("focus", function () {
  search.style.display = "flex";
});
search.addEventListener("blur", function () {
  if (search.querySelector("input").value === "") {
    search.style.display = "none";
  }
});

search.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
      if (query === "home") {
        window.location.href = "home.html";
      } else if (query === "menu") {
        window.location.href = "menu.html";
      } else {
        window.location.href = `seaech-results.html?query=${encodeURIComponent(
          query
        )}`;
      }
      searchInput.value = "";
    }
  }
});
