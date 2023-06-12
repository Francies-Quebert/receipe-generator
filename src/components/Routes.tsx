// import App from '../App';
import ReceipeList from '../pages/ReceipeList';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import ReceipePage from '../pages/ReceipePage';
import Layout from './Layout';
import { useReceipe } from '../store/useReceipe';

function RoutesComp() {
    const receipe = useReceipe.use.receipe()

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <ReceipeList />,
                    index: true,
                }, {
                    path: "receipe-page/:receipeId",
                    element: <ReceipePage />,
                },
            ],
            errorElement: <ErrorBoundary />
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default RoutesComp