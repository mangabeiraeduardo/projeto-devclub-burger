const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const filterAll = document.querySelector(".filter-all");

function formatCurrancy(value) {
  const newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return newValue;
}

function showAll(productArray) {
  let myList = "";

  productArray.forEach((product) => {
    myList += `
              <li>
      
                  <img src=${product.src}>
                  <p>${product.name}</p>
                  <p class="item-prace"> ${formatCurrancy(product.price)}</p>
      
      
              </li>
              `;
    list.innerHTML = myList;
  });
}
function mapAllItens() {
  const newPrice = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9, // 10% de desconto
  }));
  showAll(newPrice);
}
function sumAllItem() {
  const totaValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  list.innerHTML = `
      <li>    

      <p> O valor total dos itens é  ${formatCurrancy(totaValue)}</p>   
      
      </li>`;
}
function filterAllItem() {
  const filterJustVegan = menuOptions.filter((product) => product.vegan);
  showAll(filterJustVegan);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItens);
sumAll.addEventListener("click", sumAllItem);
filterAll.addEventListener("click", filterAllItem);
