import React from "react";
import { useFetch } from "../hooks/useFetch";
import ProductList from "../components/ProductList";

function Home() {
  const { data, error, isPending } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <section>
      <div className="container">
        {error && <h2 className="error">{error}</h2>}
        {isPending && <h2 className="loader">Loading...</h2>}
        {data && <ProductList products={data} />}
      </div>
    </section>
  );
}

export default Home;
