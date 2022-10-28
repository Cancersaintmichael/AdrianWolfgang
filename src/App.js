import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery/Gallery';
// import { Images } from './pages/Gallery/Images';
const LazyImages = React.lazy(() => import('./pages/Gallery/Images'));
import { Videos } from './pages/Gallery/Videos';
import { News } from './pages/News';
import { Products } from './pages/Products/Products';
import { FeaturedProducts } from './pages/Products/FeaturedProducts';
import { NewProducts } from './pages/Products/NewProducts';
import { About } from './pages/About';
import { Users } from './pages/Users/Users';
import { UserDetails } from './pages/Users/UserDetails';
import { Admin } from './pages/Users/Admin';
import { NotFound } from './pages/NotFound';

import './style.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/gallery" element={<Gallery />}>
          <Route
            index
            element={
              <React.Suspense fallback="Loading...">
                <LazyImages />
              </React.Suspense>
            }
          />
          <Route
            path="images"
            element={
              <React.Suspense fallback="Loading...">
                <LazyImages />
              </React.Suspense>
            }
          />
          <Route path="videos" element={<Videos />} />
        </Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
