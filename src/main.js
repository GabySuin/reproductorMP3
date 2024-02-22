/* auth */

if (!localStorage.getItem('isLogged')) {
  window.location.href = './pages/login.html';
}

/* Canciones */

class Canciones {
  static idCounter = 0;
  constructor({ nombre, duracion,album,  genero,año, image, musica, isFavorite = false, inplaylist = false }) {
    this.id = Canciones.idCounter++;
    this.nombre = nombre;
    this.duracion = duracion;
    this.album = album;
    this.genero = genero;
    this.año = año;
    this.image = image;
    this.musica = musica;
    this.isFavorite = isFavorite;
    this.inplaylist = inplaylist;
  }
}

/* CancionesLista contenedores  */

class CancionesList {
  constructor({ nombre, Cancioness = [], container }) {
    this.nombre = nombre
    this.Cancioness = Cancioness
    this.container = container
  }

  renderList() {
    if (this.Cancioness.length === 0) this.container.innerHTML = `<p class="CancionessError">No se encontraron Cancionesos</p>`
    else this.container.innerHTML = this.Cancioness.map((p) => `
     <div class="Canciones" onClick="changeCurrentCanciones(${p.id})">
                <div class="left-Canciones">
                  <img src=${p.image} alt="" />
                  <h4>${p.nombre}</h4>
                </div>
                <span class="genero">${p.genero}</span>
                ${this.nombre === 'Favorites' ? `<i class="bi bi-heart-fill" onClick="addCurrentCancionesToplaylist(${p.id})"></i>` : ''}
                </div>
    `).join('');
  }

  searchCanciones(query) {
    const results = this.Cancioness.filter(p => p.nombre.toLowerCase().includes(query.toLowerCase()))
    if (results.length === 0) this.container.innerHTML = `<p class="CancionessError">No se encontraron Cancionesos</p>`
    else CancionessContainerList.innerHTML = results.map((p) => `
     <div class="Canciones" onClick="changeCurrentCanciones(${p.id})">
                <div class="left-Canciones">
                  <img src=${p.image} alt="" />
                  <h4>${p.nombre}</h4>
                </div>
                <span class="genero">${p.genero}</span>
              </div>
    `)
  }

  addCanciones(Canciones) {
    if (this.nombre === 'Favorites') Canciones.isFavorite = true
    if (this.nombre === 'playlist') Canciones.inplaylist = true
    this.Cancioness.push(Canciones)
    this.renderList()
  }

  removeCanciones(Canciones) {
    if (this.nombre === 'Favorites') Canciones.isFavorite = false
    if (this.nombre === 'playlist') Canciones.inplaylist = false
    const index = this.Cancioness.indexOf(Canciones)
    if (index === -1) return
    this.Cancioness.splice(index, 1)
    this.renderList()
  }
}

/* lista para crear canciones falta nombre ahi estatodo */

const allCancioness = [


  new Canciones({
    nombre: 'Se alejo de mi',
    duracion: '04:46',
    album: 'Paolo Plaza',
    genero: 'Salsa',
    año: '2012',
    image: 'assets/imagenes/se alejop de mi.jpg',
    musica: 'assets/music/se alejo de mi   paolo plaza (letra).mp3'
  }),
  new Canciones({
    nombre: 'Adicto ',
    duracion: '5:03',
    album: 'PRINCE ROYCE Y MARC ANTONY',
    genero: 'Bachata',
    año: '2018',
    image: 'assets/imagenes/adicto prince royce.jpg',
    musica: 'assets/music/Adicto    Prince Royce x Marc Anthony (LETRA).mp3'
 
  }),
  new Canciones({
    nombre: 'Fantasia Herida',
    duracion: '03:46',
    album: 'Erick Franchesky',
    genero: 'Bachata',
    año: '2018',
    image: 'assets/imagenes/fantasia herida.jpg',
    musica: 'assets/music/Erick Franchesky   Fantasia Herida.mp3'
 
    }), 
  
  new Canciones({
    nombre: 'Arrepentida',
    duracion: '04:26',
    album: 'Beder',
    genero: 'Salsa',
    año: '2013',
    image: 'assets/imagenes/arrepentida.jpg',
    musica: 'assets/music/arrepentida Beder el musicologo letra.mp3'
  }),
  new Canciones({
    nombre: 'Corazon de Acero',
    duracion: '03:44',
    album: 'Yiyo Sarante',
    genero: 'Salsa',
    año: '2011',
    image: 'assets/imagenes/corazon de acero.jpg',
    musica: 'assets/music/Yiyo Sarante    Corazòn de Acero Audio Oficial.mp3'
  }),

  new Canciones({
    nombre: 'Rattle',
    duracion: '04:40',
    album: 'Bingo Players',
    genero: 'Rock',
    año: '2001',
    image: 'assets/imagenes/bingo players.jpg',
    musica: 'assets/music/Bingo Players   Rattle (Original Mix).mp3'
  }),


  new Canciones({
    nombre: 'Cuando Volveras',
    duracion: '03:44',
    album: 'Aventura',
    genero: 'Bachata',
    año: '2003',
    image: 'assets/imagenes/aventura cuando volveras.jpg',
    musica: 'assets/music/Aventura cuando volveras en español.mp3'
  }),


  new Canciones({
    nombre: 'Dime que voy hacer sin ti',
    duracion: '03:44',
    album: 'Grupo Caneo',
    genero: 'Salsa',
    año: '2016',
    image: 'assets/imagenes/dime que voy hacer sin ti.jpg',
    musica: 'assets/music/Grupo Caneo   Dime Que Voy Hacer Sin Ti (letra).mp3'
  }),


  new Canciones({
    nombre: 'Animals vs Tsunami',
    duracion: '05:44',
    album: 'Houssem',
    genero: 'Electronica',
    año: '2016',
    image: 'assets/imagenes/animales vs tsinami.jpg',
    musica: 'assets/music/animals vs tsunami vs tremor vs immortal vs stampede   Dj Houssem remix 2016.mp3'
  }),


  new Canciones({
    nombre: 'Infinity',
    duracion: '03:44',
    album: 'Dj Tiesto',
    genero: 'SElectronica',
    año: '2017',
    image: 'assets/imagenes/dj tiesti infinity.jpg',
    musica: 'assets/music/animals vs tsunami vs tremor vs immortal vs stampede   Dj Houssem remix 2016.mp3'
  }),


  new Canciones({
    nombre: 'You are my heart',
    duracion: '03:44',
    album: 'Modern Talking',
    genero: 'Electronica',
    año: '2011',
    image: 'assets/imagenes/moder talking youre.jpg',
    musica: 'assets/music/Modern Talking   You39re My Heart, You39re My Soul (Official Music Audio).mp3'
  }),


  new Canciones({
    nombre: 'Lipps Inc',
    duracion: '03:44',
    album: 'Funkytown',
    genero: 'Salsa',
    año: '2010',
    image: 'assets/imagenes/funkytown.jpg',
    musica: 'assets/music/Funkytown  Lipps Inc (original).mp3'
  }),


  new Canciones({
    nombre: 'Nowhere Fast',
    duracion: '03:44',
    album: 'Fire Inc',
    genero: 'Electronica',
    año: '1984',
    image: 'assets/imagenes/fire inc.jpg',
    musica: 'assets/music/Fire Inc.   Nowhere Fast (1984).mp3'
  }),


  new Canciones({
    nombre: 'Maniac',
    duracion: '03:44',
    album: 'Michael Sembello',
    genero: 'Electronica',
    año: '1985',
    image: 'assets/imagenes/fantasia herida.jpg',
    musica: 'assets/music/Michael Sembello   Maniac.mp3'
  }),


  new Canciones({
    nombre: 'Boys',
    duracion: '03:44',
    album: 'Sabrina',
    genero: 'Rock',
    año: '1987',
    image: 'assets/imagenes/sabrina boys.jpg',
    musica: 'assets/music/Sabrina   Boys(Live,1987).mp3'
  }),


  new Canciones({
    nombre: 'Self Control',
    duracion: '03:44',
    album: 'Laura Branigan',
    genero: 'Rock',
    año: '1985',
    image: 'assets/imagenes/laura branigan.jpg',
    musica: 'assets/music/Laura Branigan   Self Control.mp3'
  }),


  new Canciones({
    nombre: 'Grease you are the one that i want',
    duracion: '03:44',
    album: 'Sabrina',
    genero: 'Rock',
    año: '2011',
    image: 'assets/imagenes/grease you are that i want.jpg',
    musica: 'assets/music/grease you are the one that i want.mp3'
  }),


  new Canciones({
    nombre: 'PALOMA NEGRA ',
    duracion: '03:44',
    album: 'MARGARITA LUGUE ',
    genero: 'Cumbia',
    año: '2019',
    image: 'assets/imagenes/margarita lugue paloma negra.jpg',
    musica: 'assets/music/MARGARITA LUGUE PALOMA NEGRA REMIX PRO 20K5.mp3'
  }),


  new Canciones({
    nombre: ' POR TU AMOR ESTOY MURIENDO',
    duracion: '03:44',
    album: 'DELEITES ANDINOS ',
    genero: 'Cumbia',
    año: '2011',
    image: 'assets/imagenes/deleites andinos por tu amor estoy muriendo.jpg',
    musica: 'assets/music/DELEITES ANDINOS   POR TU AMOR ESTOY MURIENDO     Vídeo Oficial.mp3'
  }),


  new Canciones({
    nombre: 'no se',
    duracion: '03:44',
    album: 'el clon',
    genero: 'cumbia',
    año: '2011',
    image: 'assets/imagenes/el clon no se.jpg',
    musica: 'assets/music/el clon no se.mp3'
  }),


  new Canciones({
    nombre: ' VUELVE ',
    duracion: '03:44',
    album: 'PANBUR',
    genero: 'Cumbia',
    año: '2011',
    image: 'assets/imagenes/panbur vuelve.jpg',
    musica: 'assets/music/PANBUR VUELVE (Audio).mp3'
  }),


  new Canciones({
    nombre: 'PECADO DE AMOR ',
    duracion: '03:44',
    album: 'DELEITES ANDINOS',
    genero: 'Cumbia',
    año: '2013',
    image: 'assets/imagenes/pecado de amor.jpg',
    musica: 'assets/music/PECADO DE AMOR - DELEITES ANDINOS.mp3'
  }),



  new Canciones({
    nombre: 'LA CELOSA',
    duracion: '03:44',
    album: 'DELEITES ANDINOS',
    genero: 'Cumbia',
    año: '2011',
    image: 'assets/imagenes/deleites andinos la celosa.jpg',
    musica: 'assets/music/DELEITES ANDINOS - LA CELOSA - Vídeo Oficial.mp3'
  }),


  new Canciones({
    nombre: 'NUESTRO JURAMENTO ',
    duracion: '03:44',
    album: 'DELEITES ANDINOS',
    genero: 'Cumbia',
    año: '2018',
    image: 'assets/imagenes/deleites andinos nuestro juramento.jpg',
    musica: 'assets/music/DELEITES ANDINOS - NUESTRO JURAMENTO - Vídeo Oficial.mp3'
  }),


  new Canciones({
    nombre: 'Muriendo de amor',
    duracion: '03:44',
    album: 'Corazon serrano',
    genero: 'Cumbia',
    año: '2011',
    image: 'assets/imagenes/muriendo de amor corazón serranojpg',
    musica: 'assets/music/Muriendo de amor - Corazon serrano (videoclip HD).mp3'
  }),


  new Canciones({
    nombre: 'Muriendo de amor',
    duracion: '03:44',
    album: 'Corazon serrano',
    genero: 'Cumbia',
    año: '2011',
    image: 'assets/imagenes/muriendo de amor corazón serranojpg',
    musica: 'assets/music/Muriendo de amor - Corazon serrano (videoclip HD).mp3'
  }),



  new Canciones({
    nombre: 'Muriendo de amor',
    duracion: '03:44',
    album: 'Corazon serrano',
    genero: 'Cumbia',
    año: '2011',
    image: 'assets/imagenes/muriendo de amor corazón serranojpg',
    musica: 'assets/music/Muriendo de amor - Corazon serrano (videoclip HD).mp3'
  }),



  new Canciones({
    nombre: 'Muriendo de amor',
    duracion: '03:44',
    album: 'Corazon serrano',
    genero: 'Cumbia',
    año: '2011',
    image: 'assets/imagenes/muriendo de amor corazón serranojpg',
    musica: 'assets/music/Muriendo de amor - Corazon serrano (videoclip HD).mp3'
  }),



  new Canciones({
    nombre: 'Muriendo de amor',
    duracion: '03:44',
    album: 'Corazon serrano',
    genero: 'Cumbia',
    año: '2011',
    image: 'assets/imagenes/muriendo de amor corazón serranojpg',
    musica: 'assets/music/Muriendo de amor - Corazon serrano (videoclip HD).mp3'
  }),



  new Canciones({
    nombre: 'Muriendo de amor',
    duracion: '03:44',
    album: 'Corazon serrano',
    genero: 'Cumbia',
    año: '2011',
    image: 'assets/imagenes/muriendo de amor corazón serranojpg',
    musica: 'assets/music/Muriendo de amor - Corazon serrano (videoclip HD).mp3'
  }),



  new Canciones({
    nombre: 'Muriendo de amor',
    duracion: '03:44',
    album: 'Corazon serrano',
    genero: 'Cumbia',
    año: '2011',
    image: 'assets/imagenes/muriendo de amor corazón serranojpg',
    musica: 'assets/music/Muriendo de amor - Corazon serrano (videoclip HD).mp3'
  }),

  






















]

/* Current Canciones */

const CancionesContainer = document.getElementById('Canciones-container')
let currentCanciones

function addCurrentCancionesToplaylist() {
  playlist.addCanciones(currentCanciones)
  changeCurrentCanciones(currentCanciones.id)
}

function addCurrentCancionesToFavorite() {
  favorites.addCanciones(currentCanciones)
  changeCurrentCanciones(currentCanciones.id)
}

function removeCurrentCancionesFromplaylist() {
  playlist.removeCanciones(currentCanciones)
  changeCurrentCanciones(currentCanciones.id)
}

function removeCurrentCancionesFromFavorite() {
  favorites.removeCanciones(currentCanciones)
  changeCurrentCanciones(currentCanciones.id)
}

function changeCurrentCanciones(id) {

  const index = allCancioness.findIndex(p => p.id === id);
  const prevIndex = (index - 1 + allCancioness.length) % allCancioness.length;
  
  const nextIndex = (index + 1) % allCancioness.length;
 
  const Canciones = allCancioness[index];
  currentCanciones = Canciones;
  CancionesContainer.innerHTML = `
      <img class="Canciones-img" src="${Canciones.image}" alt="" />
      <h5 class="Canciones-nombre">
          <span> Nombre : </span>${Canciones.nombre} <br>
          
          <span> Artista : </span>${Canciones.album}<br>
          <span> Genero : </span>${Canciones.genero}<br>
          <span> Año : </span>${Canciones.año}
      </h5>
      <div class="Canciones-price">
          <audio id="Player" controls>
              <source src="${Canciones.musica}" type="audio/mp3">
              Your browser does not support the audio element.
          </audio>
          <button  id="prevButton" class="button-adelantar"> << </button>
         
          <button  id="nextButton"  class="button-adelantar"> >> </button>
          </div>

     

      ${Canciones.isFavorite ?
          `<button class="add-to-playlist-btn secondary-btn" onClick="removeCurrentCancionesFromFavorite()">
              <i class="bi bi-x-lg"></i> Remove from favorites
          </button >`
          :
          `<button class="add-to-playlist-btn secondary-btn" onClick="addCurrentCancionesToFavorite()">
              <i class="bi bi-heart"></i> Add to favorites
          </button >`}

      ${Canciones.inplaylist ?
          `<button class="add-to-playlist-btn" onClick="removeCurrentCancionesFromplaylist()">
              <i class="bi bi-x-lg"></i> Remove from playlist
          </button>`
          :
          `<button class="add-to-playlist-btn" onClick="addCurrentCancionesToplaylist()">
              <i class="bi bi-playlist"></i> Add to playlist
          </button>`}
  `;


  const prevButton = document.getElementById('prevButton');
  prevButton.addEventListener('click', () => {
      changeCurrentCanciones(allCancioness[prevIndex].id);
  });

  const nextButton = document.getElementById('nextButton');
  nextButton.addEventListener('click', () => {
      changeCurrentCanciones(allCancioness[nextIndex].id);
  });
 
  
}

changeCurrentCanciones(0)


const playlistContainerList = document.getElementById('playlist')
const CancionessContainerList = document.getElementById('Cancioness')
const favoritesContainerList = document.getElementById('favorites')

const Cancioness = new CancionesList({ nombre: 'All Cancioness', Cancioness: allCancioness, container: CancionessContainerList })
const playlist = new CancionesList({ nombre: 'playlist', container: playlistContainerList })
const favorites = new CancionesList({ nombre: 'Favorites', container: favoritesContainerList })

function onStart() {
  Cancioness.renderList()
  favorites.renderList()
  playlist.renderList()
}
onStart()

const searchInput = document.getElementById('search')
const searchIcon = document.getElementById('searchIcon')
searchIcon.addEventListener('click', () => {
  Cancioness.searchCanciones(searchInput.value)
})

searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    Cancioness.searchCanciones(searchInput.value)
  }
})


 