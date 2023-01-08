function toggleMode() {
  const html = document.body

  // html a lista de clase contem o light
  if(html.classList.contains('light')) {
    // se conter, ira pegar o html na lista de classe e vou remover a classe de nome light
    html.classList.remove('light')
  }else {
    // se não contem, irar pegar o html na lista de classes e ira adicionar
    html.classList.add('light')
  }
}