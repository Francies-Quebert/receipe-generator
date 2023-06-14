import IngredientList from '../pages/IngredientList';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import ReceipePage from '../pages/ReceipePage';
import Layout from './Layout';
import MealsList from '../pages/MealsList';

function RoutesComp() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: "/",
                    lazy: async () => ({ Component: IngredientList }),
                    index: true,
                }, {
                    path: "/meals/:name",
                    lazy: async () => ({ Component: MealsList }),
                }, {
                    path: "/meals",
                    lazy: async () => ({ Component: IngredientList }),
                }, {
                    path: "/receipe-page/:receipeId",
                    lazy: async () => ({ Component: ReceipePage }),
                },
                {
                    path: "/receipe-page",
                    lazy: async () => ({ Component: IngredientList }),
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