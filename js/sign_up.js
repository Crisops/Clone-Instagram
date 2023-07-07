const d = document;
const $input_psd = document.querySelector(".password"); // input password
const $span_show = document.getElementById("show"); // Ocultar / Mostrar




const animateSpanInput = (input) =>{

  if (!input.value < 1 || !input.value === "") {
    input.parentElement.children[0].classList.add("top");
  }else{
    input.parentElement.children[0].classList.remove("top");
  }
  
  // (input.className === "password") ? $span_show.style.display = "block": $span_show.style.display = "none";
  
  // (input.classList.contains("password")) ? $span_show.style.display = "none": $span_show.style.display = "block";
}

// const showPassword = (input) =>{
 
// }


d.addEventListener("click", (e) =>{
  if(e.target.matches("#show") && $input_psd.type === "text") {
    $input_psd.setAttribute("type", "password")
    $span_show.textContent = "Mostrar";
  }else{
    $input_psd.setAttribute("type", "text")
    $span_show.textContent = "Ocultar";
  } 

  if (e.target.matches("#input_data")) {
    e.target.addEventListener("keyup", (e) =>{
      if(e.target.value.length === 0 || e.target.value === ""){
        animateSpanInput(e.target);
      }else{
        animateSpanInput(e.target);
      };
      if (e.target.className === "password") {
        (e.target.value.length < 1) ? $span_show.style.display = "none": $span_show.style.display = "block";
      }
    })
  }
})
