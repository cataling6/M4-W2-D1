let query = document.querySelector("#search");
let valoreRicerca;
const textBox = document.querySelector("#search");
const card = document.querySelector("#immagine");
let copia = {};
const fetchPhotos = () => {
  fetch(`https://api.pexels.com/v1/search?query=${valoreRicerca}`, {
    headers: {
      Authorization: "FZRsZAOPwP3pNnVygNbODvcOYnkKNtb3Hpzm3runAtM17yQ0nHiUwu6B",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw resp.status;
      }
    })
    .then((imgs) => {
      const { photos } = imgs;
      copia = photos;
      photos.map((photo) => {
        card.innerHTML += `
        <div class="card col-lg-3">
        <img src="${photo.src.medium}" class="card-img-top" alt="..." />          
        <div class="card-body">
            <h5 class="card-title">${photo.photographer}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${photo.alt}</h6>
            <p class="card-text d-flex align-self-end"><a href="${photo.photographer_url}" target="_blank">Link Ph.<a/></p>
        </div>
          </div> `;
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

textBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    cercaImmagine();
  }
});
function cercaImmagine() {
  card.innerHTML = "";
  valoreRicerca = query.value;
  fetchPhotos();
}

function costante() {
  const persona = [1, 2, 3];
  const p = persona;
  p[0] = 9;
  console.log(p, persona);
}
