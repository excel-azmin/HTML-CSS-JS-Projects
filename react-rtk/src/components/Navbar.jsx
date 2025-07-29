import { useSelector } from 'react-redux';
import { Link } from 'react-router';

export default function Navbar() {
  const catItems = useSelector((state) => state.cart);

  // const navigate = useNavigate();

  const navigateToCart = () => {
    Link.to('/cart');
  };

  return (
    <div>
      <div className="navbar bg-base-100 border-b border-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {' '}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{' '}
                </svg>
                <span className="badge badge-sm indicator-item">
                  {catItems.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body ">
                <span className="text-lg font-bold">
                  {catItems.length} Items
                </span>
                <div className="w-full ">
                  {catItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-cols items-center justify-between bg-base-200 p-2 rounded"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-cover mr-2"
                      />
                      <span>
                        {item.title.length > 20
                          ? item.title.slice(0, 20) + '...'
                          : item.title}
                      </span>
                      <span className="text-sm font-bold">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-info">
                  Subtotal: $
                  {catItems
                    .reduce((total, item) => total + item.price, 0)
                    .toFixed(2)}
                </span>
                <div className="card-actions">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => navigateToCart()}
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
