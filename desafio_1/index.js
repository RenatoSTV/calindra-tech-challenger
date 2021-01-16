const input = document.getElementById("search");
const btn = document.getElementById("btn");

const sugestionList = document.getElementById("productsList");

btn.addEventListener("click", async function () {
  const value = input.value;

  if (value.length > 0) {
    const res = await fetch(
      `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${value}&source=nanook`
    );

    let productsList = await res.json();

    products = productsList.products;

    const lista = products.map(item => `<h4>${item.name}</h4>`).join('')

    // const list = []
    // for (let product of products) {
    //   list.push(`<h4>${product.name}</h4>`);
    // }

    // let lista = list.map(item => item).join('')
    console.log(lista);
    sugestionList.classList.add('show')
    sugestionList.innerHTML = lista
  } else {
    sugestionList.innerHTML = "";
    sugestionList.classList.remove('show')
  }
});
