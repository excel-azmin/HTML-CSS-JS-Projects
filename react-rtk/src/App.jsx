import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import store from './store/store';

function App() {
  return (
    <>
      <div className="max-w-11/12 mx-auto px-4">
        <Provider store={store}>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
