import { createBrowserRouter } from 'react-router-dom';
import HomePages from './pages/HomePages';
import MainLayout from './layout/MainLayout';
import Room from './pages/Room';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import Service from './pages/Service';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import PaymentConfirm from './pages/Bookk';
import Bookk from './pages/Bookk';

export const router = createBrowserRouter([
    {
        path:'/book',
        element:<LoginPage />
    },
    {
        path:'/Signup',
        element:<SignupPage />
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePages />,
            },
            {
                path: 'room',
                element: <Room />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'services',
                element: <Service />,
            },
            {
                path: 'gallery',
                element: <Gallery />,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
        ],
    },
    {
        path:'/roombooking',
        element:<Booking />
    },
    {
        path:'/Payment',
        element:<Payment />
    },
    {
        path:'/Confirm',
        element:<Bookk />
    },
]);