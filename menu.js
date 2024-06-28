// Description: Semester 2: Midterm Sprint Gary Blues Diner Home Page
// Page completed by Amanda Halley
// Group: Tyler Wall, Amanda Halley, Ryan Tibbo

document.addEventListener("DOMContentLoaded", function () {
  const searchicon2 = document.querySelector("#searchicon2");
  const search = document.querySelector("#searchinput");
  const searchInput = search.querySelector("input");

  searchicon2.addEventListener("click", function () {
    search.style.display = "flex";
    searchInput.focus();
  });

  searchInput.addEventListener("blur", function () {
    if (searchInput.value === "") {
      search.style.display = "none";
    }
  });

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const query = searchInput.value.trim().toLowerCase();
      if (query) {
        if (query === "home") {
          window.location.href = "home.html";
        } else if (query === "order") {
          window.location.href = "order.html";
        } else {
          window.location.href = `search-results.html?query=${encodeURIComponent(
            query
          )}`;
        }
        searchInput.value = "";
      }
    }
  });
});
