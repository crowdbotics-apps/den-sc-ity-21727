import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList150823Navigator from '../features/NotificationList150823/navigator';
import Settings150822Navigator from '../features/Settings150822/navigator';
import Settings150814Navigator from '../features/Settings150814/navigator';
import UserProfile150812Navigator from '../features/UserProfile150812/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList150823: { screen: NotificationList150823Navigator },
Settings150822: { screen: Settings150822Navigator },
Settings150814: { screen: Settings150814Navigator },
UserProfile150812: { screen: UserProfile150812Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
