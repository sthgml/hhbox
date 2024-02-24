import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { render, screen, waitFor } from '@testing-library/react';

import routes from './routes';
import fixtures from '../fixtures';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is “/”', () => {
    it('renders the home page', async () => {
      renderRouter('/');

      screen.getByText(/Home page/);

      // await waitFor(() => {
      //   screen.getByText(/Category #1/);
      // });
    });
  });

  context('with category ID', () => {
    it('renders the product list page', async () => {
      renderRouter(`/produts?categoryId=${fixtures.categories}`);

      // await waitFor(() => {
      //   screen.getByText(/Product #1/);
      // });
    });
  });
});
