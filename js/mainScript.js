const searchBar = document.getElementById("searchForum");
let searchItem;
const newTitleInput = document.getElementById("newPostTitle");
const newTextInput = document.getElementById("newPostText");
let newPostTitleIn;
let newPostTextIn;
const now = new Date();
let themeS = localStorage.navTheme;
if (themeS != "light") {
  localStorage.setItem("navTheme", "dark");
}

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
  
  clearIn();
});

// Clears Inputs
const clearIn = () => {
  newPostTitleIn = null;
  newPostTextIn = null;
  localStorage.setItem("mainNotes", forumContainer.innerHTML);
  pastThemeColourFunction(localStorage.navTheme);
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
  <div class="card">
  
  <div class="card-body">
  <h2 class="card-title"> ${a} </h2>
  <p class="card-text"> ${b} </p>
  <button class='btn shadow rounded-5 btn-danger my-2 deleteBTN'>Delete</button>
  <div class="rounded-5 card-footer" style="text-align:end;"> ${formatedDate}</div>`;
  return htmlContent;
};
//theme
const pastThemeColourFunction = (a) => {
  if (a == "dark") {
    $("#mainNavBar").removeClass("bg-primary");
    $("#mainNavBar").addClass("bg-danger");
    $('.deleteBTN').removeClass("btn-primary");
    $('.deleteBTN').addClass("btn-danger");
  } else {
    $("#mainNavBar").addClass("bg-primary");
    $("#mainNavBar").removeClass("bg-danger");
    $(".deleteBTN").addClass("btn-primary");
    $(".deleteBTN").removeClass("btn-danger");
  }
};

$("#dark-nav-colour").on("click", function () {
  pastThemeColourFunction("dark");
  localStorage.navTheme = "dark";
});
if (localStorage.navTheme) {
  pastThemeColourFunction(localStorage.navTheme);
}
$("#light-nav-colour").on("click", function () {
  pastThemeColourFunction("light");
  localStorage.navTheme = "light";
});
if (localStorage.navTheme) {
  pastThemeColourFunction(localStorage.navTheme);
}

$('.deleteBTN').on('click', function () {
  let offset = $(this).offsetParent();
  offset.parent().addClass('d-none');
  let top = offset.top;
  let left = offset.left;
  clearIn();
});