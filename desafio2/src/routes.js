import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Repositories from './pages/Repositories';
import Issues from './pages/Issues';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Repositories,
      Issues,
    },
    {
      defaultNavigationOptions: {
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
