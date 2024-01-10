let query = document.querySelector("#search");
let valoreRicerca;
let counterFetch = 0;
const card = document.querySelector("#immagine");
const pageNr = document.querySelector("#pageNr");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

const fetchPhotos = (page) => {
  if (counterFetch == 0) {
    fetch(`https://api.pexels.com/v1/search?query=${valoreRicerca}&per_page=50`, {
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
        /// VARIE PROVE ///
        //const { photos } = imgs;
        //mi filtro tutte le foto con id minore a 10000
        //const result = photos.filter((pic) => pic.id > 100000 && pic.id < 200000);
        // result.forEach((elemento) => {
        //   card.innerHTML += `
        //   <div class="card col-sm-6 col-md-4 col-lg-3">
        //   <img src="${elemento.src.medium}" class="card-img-top" alt="..." />
        //   <div class="card-body">
        //       <h5 class="card-title">${elemento.photographer}</h5>
        //       <h6 class="card-subtitle mb-2 text-muted">${elemento.alt}</h6>
        //       <p class="card-text d-flex align-self-end"><a href="${elemento.photographer_url}" target="_blank">Link Ph.<a/></p>
        //   </div>
        //     </div> `;
        // });
        /// VARIE PROVE - END ///
        pageNr.innerHTML = `${counterFetch}`;
        const { photos } = imgs;
        photos.map((photo) => {
          card.innerHTML += `
        <div class="card col-sm-6 col-md-4 col-lg-3">
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
    counterFetch++;
  } else {
    fetch(`https://api.pexels.com/v1/search?query=${valoreRicerca}&page=${page}&per_page=50`, {
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
        //const { photos } = imgs;
        //mi filtro tutte le foto con id minore a 10000
        //const result = photos.filter((pic) => pic.id > 100000 && pic.id < 200000);
        // result.forEach((elemento) => {
        //   card.innerHTML += `
        //   <div class="card col-sm-6 col-md-4 col-lg-3">
        //   <img src="${elemento.src.medium}" class="card-img-top" alt="..." />
        //   <div class="card-body">
        //       <h5 class="card-title">${elemento.photographer}</h5>
        //       <h6 class="card-subtitle mb-2 text-muted">${elemento.alt}</h6>
        //       <p class="card-text d-flex align-self-end"><a href="${elemento.photographer_url}" target="_blank">Link Ph.<a/></p>
        //   </div>
        //     </div> `;
        // });
        pageNr.innerHTML = `${counterFetch}`;
        const { photos } = imgs;
        photos.map((photo) => {
          card.innerHTML += `
        <div class="card col-sm-6 col-md-4 col-lg-3">
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
  }
};

query.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    cercaImmagine();
  }
});

function cercaImmagine() {
  card.innerHTML = "";
  valoreRicerca = query.value;
  fetchPhotos();
}

function nextPage() {
  card.innerHTML = "";
  counterFetch++;
  fetchPhotos(counterFetch);
}

function prevPage() {
  card.innerHTML = "";
  counterFetch--;
  fetchPhotos(counterFetch);
}
