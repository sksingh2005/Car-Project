import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SkeletonLoader from './components/Skeletonloader.jsx';
import PrivateRoute from './components/Privateroute'; // Adjust the path as needed
import CarDetailsPage from './components/Cardetails.jsx';
import DeleteCar from './components/Delete.jsx';

// Lazy-loaded components
const Home = lazy(() => import('./components/Home.jsx'));
const Buycars = lazy(() => import('./components/Buycars.jsx'));
const Ms = lazy(() => import('./components/MS.jsx'));
const Services = lazy(() => import('./components/Service.jsx'));
const Book = lazy(() => import('./components/Bookservice.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const ScrollToTop = lazy(() => import('./components/Scrolltop.jsx'));
const AdminPage = lazy(() => import('./components/Admin1.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Signup = lazy(() => import('./components/Signup.jsx'));
const Admin = lazy(() => import('./components/Admin.jsx'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SkeletonLoader />}>
        <ScrollToTop />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Buycars />} path="/cars" />
          <Route element={<Ms />} path="/cars/ms" />
          <Route element={<Services />} path="/services" />
          <Route element={<Book />} path="/book-service" />
          <Route element={<About />} path="/about-us" />
          <Route element={<Contact />} path="/contact-us" />
          <Route element={<PrivateRoute><Admin /></PrivateRoute>} path="/admin" />
          <Route element={<PrivateRoute><AdminPage /></PrivateRoute>} path="/add-car" />
          <Route element={<PrivateRoute><Signup/></PrivateRoute>} path='/signin'/>
          <Route element={<PrivateRoute><DeleteCar/></PrivateRoute>} path='/delete-car'/>
          <Route path="/cars/:carName" element={<CarDetailsPage />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
