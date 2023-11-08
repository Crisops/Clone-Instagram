const d = document.documentElement;

const $popup_more_option = document.getElementById("more_options");


d.addEventListener("click", (e) =>{
  if (e.target.matches(".grid_options *")) {
    $popup_more_option.classList.toggle("active")
  }
})