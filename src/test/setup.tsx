import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router, RouterProvider, createMemoryRouter } from 'react-router-dom';

const RootWrapper = ({ children, badRoute = ['/'], path }: { children: React.ReactNode, badRoute?: string[], path: string }) => {

    const routes = [
        {
            path: '/',
            element: <>{children}</>,
            children: [
                {
                    path: path,
                    element: <>{children}</>
                },
            ]
        }];
        
    const router = createMemoryRouter(routes, {
        initialEntries: badRoute,
        initialIndex: 0,
        basename: '/'
    });

    return (
        <RouterProvider router={router} />
    );
};

const customRender = (ui: any, badRoute?: string[], options?: any) => {
    const RootComponent = () => <RootWrapper path={badRoute ? ui.path  : '/'} badRoute={badRoute} >
        {ui.element}
    </RootWrapper>;
    return render(ui.element, { wrapper: RootComponent, ...options });
}

export * from '@testing-library/react';

export { customRender as render };
