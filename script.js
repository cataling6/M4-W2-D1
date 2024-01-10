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
      // for (let i = 0; i < imgs.photos.length; i++) {
      //   //console.log(imgs.photos[i]);
      //   card.innerHTML += `
      //   <div class="card">
      //   <img src="${imgs.photos[i].src.medium}" class="card-img-top" alt="..." />
      //     <div class="card-body">
      //       <h5 class="card-title">${imgs.photos[i].photographer}</h5>
      //       <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      //       b5
      //     </div></div> `;
      // }
      // console.log(typeof imgs, imgs);
      const { photos } = imgs;
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
