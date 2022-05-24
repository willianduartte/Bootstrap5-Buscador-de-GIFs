let busca = document.querySelector('.busca')
let gifsEl = document.querySelector('.gifs')

function loadGifs() {
  gifsEl.innerHTML = 'carregando...'
  fetch(`https://g.tenor.com/v1/search?q=${busca.value}&key=7WM6M1C9ZBUB`)
    .then(response => {
      return response.json()
    })
    .then(json => {
      showGifs(json)
    })
}

function showGifs(jsonItems) {
  let lista = jsonItems['results']
  gifsEl.innerHTML = ''
  for (let i in lista) {
    gifsEl.innerHTML += `<div class="col-md-4  bg-light p-3 align-center"><div class="gif align-center"><img class="img-thumbnail"src="${lista[i]['media'][0]['gif']['url']}"/><h5 class="mb-3 text-center margin-top">${lista[i].content_description}</h5></div></div>`
  }
}

busca.addEventListener('keypress', e => {
  if (e.code === 'Enter') {
    loadGifs()
  }
})
