import Home from '../Pages/Home'
import CategoryPage from '../Pages/CategoryPage'
import ProductPage from '../Pages/ProductPage'
import CartPage from '../Pages/CartPage'

export const routes = [
    {
        id: 1,
        path: '/',
        component: <Home />,
    },
    {
        id: 2,
        path: '/category/:slug',
        component: <CategoryPage />,
    },
    {
        id: 3,
        path: '/product/:slug',
        component: <ProductPage />,
    },
    {
        id: 4,
        path: '/cart',
        component: <CartPage />,
    },
]
