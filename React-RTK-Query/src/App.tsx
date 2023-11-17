import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ROUTES } from './common/route/routes';
import './styles/index.css';
import './i18n';
import { wrapRoutes } from './utils/route';

const routes = wrapRoutes(ROUTES);
const router = createBrowserRouter(routes);

const App = () => <RouterProvider router={router} />;

export default App;
