import ProductList from "../components/ProductList";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data, isPending, error } = useFetch(
    "https://dummyjson.com/products/category/laptops?limit=20"
  );

  return (
    <section>
      <div className="container">
        {error && <h2>{error}</h2>}
        {isPending && <h2>Loading...</h2>}
        {data && <ProductList products={data} />}
      </div>
    </section>
  );
}

export default Home;
