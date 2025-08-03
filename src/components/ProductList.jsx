import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="card-container">
      <div className="card-container__header">
        <p className="card-container__title">Product List: </p>
        <div>
          <span className="card-container__price">Total Price: $130</span>
          <button className="btn card-container__btn">Clear</button>
        </div>
      </div>
      {Array.isArray(products) &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
