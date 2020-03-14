let fruits = [
  {
    id: 1,
    title: "Яблоки",
    price: 20,
    img:
      "https://images.unsplash.com/photo-1567209472247-9a4963aef7c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
  },
  {
    id: 2,
    title: "Манго",
    price: 40,
    img:
      "https://images.unsplash.com/photo-1550825488-28d37063a95e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80"
  }
];

const toHTML = fruit => `
  <div class="col">
    <div class="card">
      <img src="${fruit.img}" class="card-img-top" style="height:300px" alt="${fruit.title}">
      <div class="card-body">
        <h5 class="card-title">${fruit.title}</h5>
        <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
        <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
      </div>
    </div>
  </div>`;

function render() {
  const html = fruits.map(toHTML).join("");
  document.querySelector("#fruits").innerHTML = html;
}

render();

document.addEventListener("click", event => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;
  const fruit = fruits.find(fruit => fruit.id === id);
  if (btnType === "price") {
    priceModal.setContent(
      `<p>Цена на ${fruit.title}: <strong>${fruit.price}$</strong></p>`
    );
    priceModal.open();
  } else if (btnType === "remove") {
    $.confirm({
      title: "Вы уверены?",
      content: `<p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>`
    })
      .then(() => {
        fruits = fruits.filter(fruit => fruit.id !== id);
        render();
      })
      .catch(() => {
        console.log("Cancel");
      });
  }
});

const priceModal = $.modal({
  title: "Цена на товар",
  closable: true,
  width: "400px",
  footerButtons: [
    {
      text: "Закрыть",
      type: "primary",
      handler() {
        priceModal.close();
      }
    }
  ]
});
