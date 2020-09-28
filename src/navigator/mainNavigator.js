import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn2114729Navigator from '../features/SignIn2114729/navigator';
import Settings114727Navigator from '../features/Settings114727/navigator';
import UserProfile114720Navigator from '../features/UserProfile114720/navigator';
import Settings114719Navigator from '../features/Settings114719/navigator';
import Settings114717Navigator from '../features/Settings114717/navigator';
import SignIn2114715Navigator from '../features/SignIn2114715/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn2114729: { screen: SignIn2114729Navigator },
Settings114727: { screen: Settings114727Navigator },
UserProfile114720: { screen: UserProfile114720Navigator },
Settings114719: { screen: Settings114719Navigator },
Settings114717: { screen: Settings114717Navigator },
SignIn2114715: { screen: SignIn2114715Navigator },

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
