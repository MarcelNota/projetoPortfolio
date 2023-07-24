function toggleMode() {
  //alert("Tem otimos gostos humano")
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/marcel-light.png")
  } else {
    img.setAttribute("src", "./assets/m.png")
  }
}
