let query = document.querySelector("#search");
let valoreRicerca;
const card = document.querySelector("#immagine");
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
      for (let i = 0; i < imgs.photos.length; i++) {
        //console.log(imgs.photos[i]);
        card.innerHTML += ` <img src="${imgs.photos[i].src.medium}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${imgs.photos[i].photographer}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            b5
          </div>`;
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

function cercaImmagine() {
  card.innerHTML = "";
  valoreRicerca = query.value;
  fetchPhotos();
}
