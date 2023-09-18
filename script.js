function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar a tag
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode, adicione a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
