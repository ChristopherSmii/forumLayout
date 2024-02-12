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
    alert(searchItem);
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
  let dateFormat = `${now.getDate()}/${
    now.getMonth() + 1
  } ${now.getHours()}:${now.getMinutes()}`;

  const formatter = new Intl.DateTimeFormat("en-UK", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const formatedDate = formatter.format(now);

  let htmlContent = `
  <div class="col-md-6 col-lg-3 search${a} searchItem">
  <div class="card"><div class="card-body">
  <h2> ${a} </h2>
  <p class="card-text"> ${b} </p>
  <h6 class="rounded-5" style="text-align:end;"> ${formatedDate}</h6>`;
  return htmlContent;
};
