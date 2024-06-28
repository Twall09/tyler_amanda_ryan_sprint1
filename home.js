// Description: Semester 2: Midterm Sprint Gary Blues Diner Home Page
// Page completed by Tyler Wall
// Group: Tyler Wall, Amanda Halley, Ryan Tibbo

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
      if (query === "menu") {
        window.location.href = "menu.html";
      } else if (query === "order") {
        window.location.href = "order.html";
      } else {
        window.location.href = `seaech-results.html?query=${encodeURIComponent(
          query
        )}`;
      }
      searchInput.value = "";
    }
  }
});
