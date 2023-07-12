function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de MaykBrito sorrindo usando óculos escuros, jaqueta cinza e camisa preta"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "foto de MaykBrito sorrindo, usando óculos camisa preta e fundo amarelo"
    )
  }
}
