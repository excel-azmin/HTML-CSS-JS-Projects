import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

function Product({ props }) {
  const { title, image, description, category, price, rating } = props;
  const { rate, count } = rating;

  const dispatch = useDispatch();

  function handleAddToCart(props) {
    // Logic to add the product to the cart
    dispatch(addToCart(props));
    console.log(`${props.title} added to cart`);
  }

  return (
    <div className="flex justify-center items-center max-w-sm cursor-pointer">
      <div
        className="card bg-base-100 w-96 shadow-sm hover:shadow-lg transition-shadow duration-300 px-4 py-2 w-full h-140 "
        // onClick={() => document.getElementById('my_modal_5').showModal()}
      >
        <figure className="flex justify-center items-center w-full h-60">
          <img src={image} alt="Shoes" className="h-full w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title.length > 30 ? `${title.slice(0, 30)}...` : title}
          </h2>
          <h3 className="text-md font-bold text-end p-2"> Price: {price}</h3>
          <div className="flex justify-between items-center flex-wrap">
            <span className="badge badge-secondary">{category}</span>
            <span className="badge badge-outline"> R : {rate}</span>
            <span className="badge badge-outline">C: {count}</span>
          </div>
          <p className="text-sm">
            {description.length > 100
              ? `${description.slice(0, 100)}...`
              : description}
          </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(props)}
            >
              Add to Cart
            </button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      {/* Modal or additional functionality can be added here */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div>
            <figure className="flex justify-center items-center w-full h-60">
              <img
                src={image}
                alt="Shoes"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <h3 className="text-md font-bold text-end p-2">
                {' '}
                Price: {price}
              </h3>
              <div className="flex justify-between items-center flex-wrap">
                <span className="badge badge-secondary">{category}</span>
                <span className="badge badge-outline"> R : {rate}</span>
                <span className="badge badge-outline">C: {count}</span>
              </div>
              <p className="text-sm">{description}</p>
              <div className="card-actions justify-end mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(props)}
                >
                  Add to Cart
                </button>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      ;
    </div>
  );
}

export default Product;
