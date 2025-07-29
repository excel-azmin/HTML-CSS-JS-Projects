import { useSelector } from 'react-redux';

function Cart() {
  const catItems = useSelector((state) => state.cart);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {catItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {catItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-base-200 p-2 rounded"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm">Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {catItems.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">
            Total: $
            {catItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </h2>
          <button className="btn btn-primary mt-2">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
