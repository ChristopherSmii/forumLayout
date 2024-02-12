const searchBar = document.getElementById("searchForum");
let searchItem;
const newTitleInput = document.getElementById("newPostTitle");
const newTextInput = document.getElementById("newPostText");
let newPostTitleIn;
let newPostTextIn;
const now = new Date();
const forumContainer = document.getElementById("mainForum");
const pastNotes = localStorage.getItem("mainNotes");
forumContainer.innerHTML = pastNotes;
$("#newForumButton").on("click", () => {
  document.querySelector("#newForum").classList.toggle("d-none");
});
$("#searchForum").on("keypress", (event) => {
  if (event.key == "Enter") {
    $(".searchItem").hide();
    searchItem = "search" + searchBar.value;
    $("." + searchItem).show();
    if ("search" + searchBar.value == "search") {
      $(".searchItem").show();
    }
  }
});
$("#postForumButton").on("click", () => {
  newPostTitleIn = newTitleInput.value;
  newPostTextIn = newTextInput.value;
  forumContainer.innerHTML =
    forumContainer.innerHTML + newPostFunction(newPostTitleIn, newPostTextIn);
  localStorage.setItem("mainNotes", forumContainer.innerHTML);
  clearIn();
});

// Clears Inputs
const clearIn = () => {
  newPostTitleIn = null;
  newPostTextIn = null;
};

//new post
const newPostFunction = (a, b) => {
  let line1 = '<div class="col-md-6 col-lg-3 search' + a + ' searchItem">';
  let line2 = '<div class="card"><div class="card-body">';
  let line3 = "<h2>" + a + "</h2>";
  let line4 = '<p class="card-text">' + b + "</p>";
  let line5 =
    '<h6 class="rounded-5" style="text-align:end;">' +
    now.getDate() +
    "/" +
    (now.getMonth() + 1) +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes() +
    "</h6>";
  let line6 = "</div></div></div>";
  return line1 + line2 + line3 + line4 + line5 + line6;
};
