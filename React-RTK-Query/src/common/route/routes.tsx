import { RouteObject } from 'react-router-dom';

// import { PATHS } from './paths';
import Home from '@/features/Home';
import UserHome from '@/features/UserList';

export const ROUTES: RouteObject[] = [
  // {
  //   path: PATHS.ROOT.path,
  //   element: <Home />,
  //   handle: {
  //     key: PATHS.ROOT.path,
  //     displayTitle: 'Home',
  //   },
  // },
  {
    children: [
      {
        path: "users",
        element: <UserHome />
      },
      {
        path: "patients",
        element: <Home />
      },
    ]
  }
];
