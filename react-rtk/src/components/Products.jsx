import { useEffect, useState } from 'react';
import Product from './Product';

function Products() {
  const [products, setProducts] = useState([]);
  const handleProductClick = (product) => {
    console.log('Product clicked:', product);
    // You can add more functionality here, like navigating to a product detail page
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 align-items-center justify-items-center">
      {products.map((product) => (
        <Product
          key={product.id}
          props={product}
          onClick={() => handleProductClick(product)}
        />
      ))}
    </div>
  );
}

export default Products;
