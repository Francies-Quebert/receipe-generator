import IngredientList from '../pages/IngredientList';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import ReceipePage from '../pages/ReceipePage';
import Layout from './Layout';
import { useReceipe } from '../store/useReceipe';
import MealsList from '../pages/MealsList';

function RoutesComp() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <IngredientList />,
                    index: true,
                }, {
                    path: "/meals/:name",
                    element: <MealsList />,
                }, {
                    path: "/meals",
                    element: <IngredientList />,
                }, {
                    path: "/receipe-page/:receipeId",
                    element: <ReceipePage />,
                },
                {
                    path: "/receipe-page",
                    element: <IngredientList />,
                },
            ],
            errorElement: <ErrorBoundary />
        },
    ], { basename: '/' });

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default RoutesComp