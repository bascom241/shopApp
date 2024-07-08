import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CheckoutPage from './pages/CheckoutPage';
import ListPage from './pages/ListPage';
import CartPage from './pages/CartPage';
import Layout from './components/Layout';
import { ShopProvider } from './context/shop-context';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <ListPage /> },
            { path: '/cart', element: <CartPage /> },
            { path: '/checkout', element: <CheckoutPage /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ShopProvider>
            <RouterProvider router={router} />
        </ShopProvider>
    </React.StrictMode>
);
