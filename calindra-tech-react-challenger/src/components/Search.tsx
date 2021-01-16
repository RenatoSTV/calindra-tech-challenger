import { useState, useEffect } from "react";

import ProductItem, { Product } from "./ProductItem";
import Input from "./Input";

function Search() {
  const [product, setProduct] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    if (product) {
      searchProducts(product);
    } else {
      setList([]);
    }
  }, [product]);

  async function searchProducts(product: any) {
    const res = await fetch(
      `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${product}&source=nanook`
    );

    let productsList = await res.json();

    let products = productsList.products;
    console.log(products);

    setList(products);
  }

  return (
    <div className="main">
      <div className="search">
        <Input
          type="text"
          name="search"
          onChange={(e) => {
            setProduct(e.target.value);
          }}
        />
      </div>
        {list.map((product: Product) => {
          return <ProductItem key={product.name} product={product} />;
        })}
    </div>
  );
}
export default Search;
